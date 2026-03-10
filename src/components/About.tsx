import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { User } from 'lucide-react';

export default function About() {
  const paragraphs = resumeData.basics.summary.split('\n\n').slice(1);

  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-black/20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
            <User className="text-white/80" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="space-y-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full hidden md:block" />
          
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="md:pl-8"
            >
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                {p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
