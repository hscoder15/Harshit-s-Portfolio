import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { Phone, Mail, Linkedin, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'achievements', 'projects', 'skills', 'education', 'credentials'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Impact' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="text-xl font-bold tracking-tighter text-white cursor-pointer" 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          onClick={() => scrollTo('hero')}
        >
          HS.
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="relative" ref={contactRef}>
            <button 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              Contact <ChevronDown size={14} className={`transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-48 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                >
                  <a 
                    href={`tel:${resumeData.basics.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsContactOpen(false)}
                  >
                    <Phone size={16} /> Call Me
                  </a>
                  <a 
                    href={`mailto:${resumeData.basics.email}`} 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors border-t border-white/5"
                    onClick={() => setIsContactOpen(false)}
                  >
                    <Mail size={16} /> Email Me
                  </a>
                  <a 
                    href={`https://${resumeData.basics.links[0]}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors border-t border-white/5"
                    onClick={() => setIsContactOpen(false)}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
