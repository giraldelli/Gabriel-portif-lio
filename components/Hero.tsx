
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-[#DCE3ED]">
      {/* 
          Background Image with refined parallax and coverage
          - Factor reduced from 0.25 to 0.12 for subtler movement
          - Scale maintained at 1.1 to provide safety margin against edge bleeding
      */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `url('https://i.imgur.com/OjThIyj.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          transform: `translateY(${scrollY * 0.12}px) scale(1.1)`,
          willChange: 'transform'
        }}
      ></div>

      {/* Abstract Background Shapes with Layered Parallax for 3D Depth */}
      <div 
        className="absolute top-1/4 -left-20 w-64 h-64 bg-[#A4BAD2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#A4BAD2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0 transition-transform duration-75 ease-out"
        style={{ 
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.15}px)` 
        }}
      ></div>

      <div className="max-w-5xl mx-auto text-center z-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#A4BAD2]/30 text-[#0D2A4A] text-xs font-bold tracking-widest uppercase border border-[#43627F]/20">
          Uma luz no fim do túnel
        </div>
        <h1 className="text-5xl md:text-8xl font-display leading-[1.1] mb-8 text-[#0D2A4A]">
          Tecnologia que transforma <br />
          <span className="italic text-[#43627F]">ideias em experiências</span>
        </h1>
        <p className="text-lg md:text-xl text-[#0D2A4A]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Casa de Software híbrida. União entre a precisão do desenvolvimento de código com a sensibilidade do design artístico.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projetos" 
            onClick={(e) => scrollToId(e, 'projetos')}
            className="w-full sm:w-auto px-8 py-4 bg-[#43627F] text-[#DCE3ED] rounded-full font-medium flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform shadow-lg shadow-[#43627F]/20"
          >
            Ver Portfólio <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#sobre" 
            onClick={(e) => scrollToId(e, 'sobre')}
            className="w-full sm:w-auto px-8 py-4 border border-[#43627F] text-[#43627F] rounded-full font-medium hover:bg-[#43627F] hover:text-[#DCE3ED] transition-all"
          >
            Minha História
          </a>
        </div>
      </div>

      {/* Gradiente Inferior para transição suave para a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#DCE3ED] via-[#DCE3ED]/60 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
