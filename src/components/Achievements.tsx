import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowUpRight } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Impact & Achievements
            </h2>
            <div className="w-20 h-1 bg-white/20 rounded-full" />
          </div>
          <p className="text-white/50 max-w-md text-sm leading-relaxed">
            Quantifiable results and strategic improvements delivered across high-volume data pipelines and legacy systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {achievement.item}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 -rotate-45 group-hover:rotate-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {achievement.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
