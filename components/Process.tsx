
import React from 'react';
import { PROCESS_STAGES } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#DCE3ED] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A4BAD2]/5 -skew-x-12 transform origin-top-right pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#43627F] uppercase mb-4">Metodologia</h2>
          <h3 className="text-4xl md:text-5xl font-display text-[#0D2A4A] mb-6">
            Nosso Caminho <span className="italic text-[#43627F]">Criativo</span>
          </h3>
          <p className="max-w-2xl mx-auto text-[#0D2A4A]/70 text-lg font-light leading-relaxed">
            Da incerteza à clareza digital. Seguimos um processo rigoroso e transparente para garantir que sua visão se torne realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 relative">
          {PROCESS_STAGES.map((stage, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group reveal opacity-0 translate-y-10 transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-8 border-4 border-[#DCE3ED] shadow-xl transition-all duration-500 group-hover:scale-110 z-10"
                style={{ 
                  backgroundColor: stage.color, 
                  color: index === 6 ? '#DCE3ED' : '#0D2A4A',
                  background: index === 6 ? '#0D2A4A' : stage.color
                }}
              >
                {stage.icon}
              </div>
              
              <div className="text-center px-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#43627F] uppercase mb-1 block">
                  Passo 0{index + 1}
                </span>
                <h4 className="text-xl md:text-2xl font-display text-[#0D2A4A] mb-2 leading-tight h-12 flex items-center justify-center">{stage.title}</h4>
                <p className="text-[10px] font-semibold text-[#43627F]/60 mb-3 uppercase tracking-wider italic">
                  {stage.subtitle}
                </p>
                <p className="text-sm text-[#0D2A4A]/70 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              {/* Decorative line for mobile context */}
              <div className="xl:hidden w-px h-8 bg-[#43627F]/10 mt-8 group-last:hidden"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 md:p-12 bg-[#A4BAD2]/10 backdrop-blur-sm rounded-[2rem] border border-[#A4BAD2]/30 text-center reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <h5 className="font-display text-2xl text-[#0D2A4A] mb-4">Segurança e Compromisso</h5>
            <p className="text-[#0D2A4A]/70 max-w-xl mx-auto leading-relaxed italic font-light">
              "Nosso processo é desenhado para que você tenha total controle e visibilidade de cada etapa. Da primeira conversa à manutenção de longo prazo, somos seu parceiro tecnológico."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
