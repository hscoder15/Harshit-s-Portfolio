import { motion, useScroll } from 'motion/react';
import { resumeData } from '../data/resume';
import { useRef } from 'react';
import { ExternalLink, FileText, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" className="py-24 px-6 relative z-10" ref={containerRef}>
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-white/20 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 md:p-10 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} className="text-white/40 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20">
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.report} className="text-white/40 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20">
                      <FileText size={18} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-white/40 font-mono text-xs tracking-wider uppercase">{project.dates}</span>
                  {project.context && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-white/50 text-xs italic truncate">{project.context}</span>
                    </>
                  )}
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {project.bullets.map((bullet, bIndex) => (
                    <p key={bIndex} className="text-white/60 text-sm leading-relaxed">
                      {bullet}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-white/70 text-xs font-medium border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
