
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#DCE3ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#43627F] uppercase mb-4">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-display text-[#0D2A4A] mb-6">Como posso iluminar seu negócio</h3>
          <p className="max-w-2xl mx-auto text-[#0D2A4A]/60 text-lg font-light">
            Ofereço uma gama completa de serviços digitais, unindo a precisão técnica ao refinamento estético de um estúdio boutique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-10 rounded-3xl border border-[#43627F]/10 group transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] hover:bg-white/40"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#43627F', color: '#DCE3ED' }}
              >
                {service.icon}
              </div>
              <h4 className="text-2xl font-display mb-4 text-[#0D2A4A] group-hover:text-[#43627F] transition-colors">{service.title}</h4>
              <p className="text-[#0D2A4A]/70 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-8 h-1 w-12 bg-[#43627F]/30 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
          
          <div className="p-10 rounded-3xl border-2 border-dashed border-[#43627F]/20 flex flex-col justify-center items-center text-center group hover:border-[#43627F]/40 transition-all bg-[#43627F]/5">
            <h4 className="text-xl font-display text-[#0D2A4A] mb-2 italic">Precisa de algo sob medida?</h4>
            <p className="text-xs text-[#0D2A4A]/50 mb-6">Adoramos desafios que fogem do óbvio.</p>
            <a 
              href="mailto:giraldelli.studio@gmail.com?subject=Contato via Portfólio - Giral Studio" 
              className="px-6 py-2 bg-[#43627F] text-[#DCE3ED] rounded-full text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Falar com o Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
