import { resumeData } from '../data/resume';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 bg-black/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/50 text-sm">
          © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href={`tel:${resumeData.basics.phone.replace(/\s+/g, '')}`} className="text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <Phone size={18} />
            <span className="text-sm font-mono">{resumeData.basics.phone}</span>
          </a>
          <a href={`mailto:${resumeData.basics.email}`} className="text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <Mail size={18} />
            <span className="text-sm font-mono">{resumeData.basics.email}</span>
          </a>
          <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <Linkedin size={18} />
            <span className="text-sm font-mono hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
