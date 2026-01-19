
import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0D2A4A] relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="mb-24 md:mb-32 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-sm font-bold tracking-[0.6em] text-[#A4BAD2] uppercase mb-6 opacity-60">Conheça um pouco dos meus projetos</h2>
          <h3 className="text-5xl md:text-9xl font-display text-[#DCE3ED] leading-[0.85] tracking-tight">
            Projetos com <br />
            <span className="italic text-[#A4BAD2] ml-12 md:ml-32">Repositório Digital</span>
          </h3>
        </div>

        <div className="space-y-32 md:space-y-64">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center reveal opacity-0 translate-y-20 transition-all duration-[1200ms]`}
            >
              {/* Image Container */}
              <div className="flex-1 w-full group relative">
                {/* Background Number Outline */}
                <div className="absolute -top-10 -left-10 text-[10rem] md:text-[18rem] font-display text-white/5 select-none pointer-events-none leading-none z-0">
                  0{index + 1}
                </div>
                
                <div className="relative z-10 aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  
                  {/* Overlay Link */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0D2A4A]/40 backdrop-blur-[2px]"
                  >
                    <div className="bg-[#DCE3ED] text-[#0D2A4A] p-5 rounded-full shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </a>
                </div>
                
                {/* Floating Tech Tag */}
                <div className="absolute -bottom-6 right-8 px-6 py-3 bg-[#43627F] text-[#DCE3ED] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl z-20">
                  {project.category}
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-4xl md:text-7xl font-display text-[#DCE3ED] leading-none">
                    {project.title}
                  </h4>
                  <div className="h-1 w-20 bg-[#A4BAD2] rounded-full"></div>
                </div>
                
                <p className="text-[#DCE3ED]/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[#A4BAD2] font-bold uppercase text-[10px] tracking-[0.4em] group/link"
                  >
                    Acessar Repositório
                    <span className="w-12 h-12 rounded-full border border-[#A4BAD2]/40 flex items-center justify-center group-hover/link:bg-[#A4BAD2] group-hover/link:text-[#0D2A4A] group-hover/link:border-[#A4BAD2] transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
          <p className="text-[#A4BAD2]/40 text-[10px] uppercase tracking-[0.5em] mb-8">Mais experimentos disponíveis</p>
          <a 
            href="https://github.com/giraldelli?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-6 border border-[#A4BAD2]/20 rounded-full overflow-hidden transition-all duration-500 hover:border-[#A4BAD2]"
          >
            <span className="relative z-10 text-[#A4BAD2] font-display text-2xl group-hover:text-[#0D2A4A] transition-colors duration-500">
              Ver acervo no <span className="italic">GitHub</span>
            </span>
            <div className="absolute inset-0 bg-[#A4BAD2] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
