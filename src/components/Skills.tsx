import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-black/20 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Top Skills - takes up more space */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full"
            >
              <h3 className="text-xl text-white/80 font-mono mb-8 uppercase tracking-widest text-sm flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white/80" />
                {resumeData.skills[0].group}
              </h3>
              <div className="flex flex-wrap gap-4">
                {resumeData.skills[0].skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-default shadow-lg shadow-black/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages - smaller column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full"
            >
              <h3 className="text-xl text-white/80 font-mono mb-8 uppercase tracking-widest text-sm flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white/40" />
                {resumeData.skills[1].group}
              </h3>
              <div className="flex flex-col gap-4">
                {resumeData.skills[1].skills.map((skill, sIndex) => {
                  const isPrimary = sIndex === 0;
                  return (
                    <div 
                      key={sIndex}
                      className={`px-5 py-3 rounded-xl border transition-all ${isPrimary ? 'bg-white/10 border-white/20 text-white' : 'bg-transparent border-white/5 text-white/40'}`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Technical & Communication Skills - full width bottom */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-transparent border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl text-white/80 font-mono mb-8 uppercase tracking-widest text-sm flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                {resumeData.skills[2].group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills[2].skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-white/60 text-sm hover:text-white/90 hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
