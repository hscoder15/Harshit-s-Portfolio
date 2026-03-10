import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    <a 
  href="https://drive.google.com/file/d/1slULB3kHiNmCc9Q49R2b1V5042mCzHA_/view?usp=sharing" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
>
  Download Resume <Download size={18} />
</a>
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {resumeData.basics.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl text-white/70 font-mono mb-8">
            {resumeData.basics.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
            {resumeData.basics.summary.split('\n\n')[0]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          {/* <button 
            onClick={handleDownload}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Download Resume <Download size={18} />
          </button> */}
          <a 
  href="https://drive.google.com/file/d/1slULB3kHiNmCc9Q49R2b1V5042mCzHA_/view?usp=sharing" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
>
  Download Resume <Download size={18} />
</a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
