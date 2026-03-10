import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { BookOpen, Microscope } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex p-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
            <BookOpen className="text-white/80" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Education & Research
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mx-auto" />
        </motion.div>
        
        <div className="space-y-12">
          {resumeData.education.map((edu, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{edu.degree}</h3>
                    <div className="text-white/70 text-lg">{edu.institution}</div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-mono whitespace-nowrap">
                    {edu.dates}
                  </div>
                </div>
                
                {edu.coursework && (
                  <div className="mb-10">
                    <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm hover:bg-white/10 hover:border-white/20 transition-colors">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.research && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Microscope size={16} /> Research Works
                    </h4>
                    <div className="p-6 bg-gradient-to-r from-white/5 to-transparent rounded-2xl border-l-4 border-l-white/40">
                      <p className="text-white/80 text-base leading-relaxed italic">
                        {edu.research}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
