
import React from 'react';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-[#43627F] rounded-[3rem] p-12 md:p-24 text-[#DCE3ED] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCE3ED]/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A4BAD2]/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10 text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-80">Essência</h2>
          <h3 className="text-4xl md:text-6xl font-display">Personalidade e Valores</h3>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-12">
          {VALUES.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#DCE3ED]/10 flex items-center justify-center mb-8 border border-[#DCE3ED]/20 hover:bg-[#DCE3ED]/20 transition-colors">
                {value.icon}
              </div>
              <h4 className="text-2xl font-display mb-4 italic">{value.title}</h4>
              <p className="opacity-80 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#DCE3ED]/10 text-center">
            <p className="font-serif-elegant italic text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                "Buscamos ser para nossos clientes a solução que traz uma luz no fim do túnel através da transparência e do afeto tecnológico."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
