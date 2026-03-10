import { motion, useScroll, useTransform } from 'motion/react';
import { resumeData } from '../data/resume';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6 relative z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-white via-white/50 to-transparent -translate-x-1/2 hidden md:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {resumeData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/30 -translate-x-1/2 mt-6 md:mt-0 z-10 group-hover:border-white group-hover:scale-125 transition-all duration-300 hidden md:block">
                    <div className="absolute inset-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden text-left">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="text-white/40 font-mono text-xs md:text-sm mb-2">{exp.dates}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{exp.role}</h3>
                      <div className="text-white/70 font-medium text-sm md:text-base mb-5">{exp.company} • {exp.location}</div>
                      
                      <ul className="space-y-3 text-left">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                            <span className="text-white/30 mt-1.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
