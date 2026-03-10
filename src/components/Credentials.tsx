import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Award, FileBadge } from 'lucide-react';

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 px-6 relative z-10 bg-black/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <FileBadge className="text-white/80" size={24} />
              </div>
              Certifications
            </h2>
            <div className="grid gap-4">
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} className="group p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center gap-4 hover:border-white/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-150 transition-all duration-300 relative z-10" />
                  <span className="text-white/80 font-medium relative z-10">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Award className="text-white/80" size={24} />
              </div>
              Honors & Awards
            </h2>
            <div className="grid gap-4">
              {resumeData.awards.map((award, idx) => (
                <div key={idx} className="group p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center gap-4 hover:border-white/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Award className="text-white/30 group-hover:text-white transition-colors duration-300 relative z-10" size={20} />
                  <span className="text-white/80 font-medium relative z-10">{award}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
