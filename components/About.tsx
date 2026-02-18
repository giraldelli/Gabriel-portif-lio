
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 px-6 bg-[#A4BAD2]/10 relative overflow-hidden">
      {/* Zona de Fusão Superior (Vindo do Hero) */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#DCE3ED] via-[#DCE3ED]/80 to-transparent pointer-events-none z-10"></div>

      {/* Background Parallax Element */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.1}px) scale(1.1)`,
          willChange: 'transform'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img
                src="https://i.imgur.com/J3L1VHV.jpeg"
                alt="Gabriel Giraldelli Santos - Analista e Designer Digital"
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5]"
                style={{
                  transform: `translateY(${(scrollY - 800) * 0.05}px)`,
                  willChange: 'transform'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-[#DCE3ED]">
                <p className="font-display text-3xl italic">Gabriel Giraldelli</p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80">Founder & Analista Designer</p>
              </div>
            </div>

            {/* Decorative frame elements with Parallax */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#43627F]/30 rounded-tl-3xl -z-10 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${(scrollY - 800) * -0.05}px)` }}
            ></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#43627F]/30 rounded-br-3xl -z-10 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${(scrollY - 800) * 0.08}px)` }}
            ></div>
            <div
              className="absolute top-12 -right-12 w-full h-full border-2 border-[#43627F]/10 rounded-[2.5rem] -z-20 rotate-[3deg] transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${(scrollY - 800) * 0.02}px)` }}
            ></div>
          </div>

          {/* Text Column */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.4em] text-[#43627F] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#43627F]"></span>
                O <strong> Homem </strong> por trás do código
              </h2>
              <h3 className="text-5xl md:text-7xl font-display leading-[0.9] text-[#0D2A4A]">
                Gabriel <br />
                <span className="italic text-[#43627F]">Giraldelli Santos</span>
              </h3>
            </div>

            <div className="space-y-6 text-[#0D2A4A]/80 leading-relaxed text-lg font-light">
              <p>
                Me chamo Gabriel Giraldelli Santos, nascido em Porto Velho RO (1999), sou formado em Análise e Desenvolvimento de Sistemas na faculdade técnica FATEC, formado em designer digital na faculdade GRACOM e pós-graduado em Cyber segurança.
              </p>
              <p>
                Desde cedo, como muitos, sou apaixonado pela computação por conta dos jogos eletrônicos e o fascínio pelos sites e códigos que faziam tudo funcionar, imagens aparecendo, botões que redirecionam para outra página, chat e publicações ao vivo.
              </p>

              <p>
                O conhecimento e a busca de novidades tecnológicas me despertaram essa vontade de utilizá-la ao meu favor, não só para distração mas para trabalhos futuros de desenvolvimento de sites, automação de sistemas e criação de aplicativos desktop para converter algum arquivo ou separá-los. Mesmo que simples, eram funcionais e não davam tanto trabalho em fazê-los.
              </p>
              <p className="text-xl font-display italic text-[#43627F]">
                "Hoje me sinto um analista com alma de artista, criando landing pages simples mas elegantes e visualmente intuitivas."
              </p>
            </div>

            {/* Stats/Highlight Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-display text-[#43627F]">FATEC</p>
                <p className="text-[10px] text-[#0D2A4A]/60 uppercase tracking-widest font-bold">Análise de Sistemas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-display text-[#43627F]">GRACOM</p>
                <p className="text-[10px] text-[#0D2A4A]/60 uppercase tracking-widest font-bold">Design Digital</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-display text-[#43627F]">Pós-Graduado</p>
                <p className="text-[10px] text-[#0D2A4A]/60 uppercase tracking-widest font-bold">Cyber Segurança</p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/gabriel-giraldelli-santos-98134318b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0D2A4A] text-[#DCE3ED] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#43627F] transition-all"
              >
                LinkedIn Professional
              </a>
              <a
                href="https://wa.me/5565981218157"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#0D2A4A]/20 text-[#0D2A4A] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#0D2A4A] hover:text-[#DCE3ED] transition-all"
              >
                Conexão Pessoal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zona de Fusão Inferior (Indo para Services) */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#DCE3ED] via-[#DCE3ED]/80 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default About;
