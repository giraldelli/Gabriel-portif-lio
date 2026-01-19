
import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
    <footer className="bg-[#0D2A4A] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" onClick={(e) => scrollToId(e, 'home')} className="flex items-center mb-6 group">
              <img 
                src="https://i.imgur.com/pW2a4ev.png" 
                alt="Giral Studio Logo" 
                className="h-28 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </a>
            <p className="text-[#DCE3ED]/60 max-w-sm leading-relaxed mb-8">
              Serviços digitais que atua na interseção entre tecnologia e criatividade. Criando experiências digitais com alma.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/giralstudio1_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A4BAD2] hover:bg-[#A4BAD2] hover:text-[#0D2A4A] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gabriel-giraldelli-98134318b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A4BAD2] hover:bg-[#A4BAD2] hover:text-[#0D2A4A] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/giraldelli?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A4BAD2] hover:bg-[#A4BAD2] hover:text-[#0D2A4A] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:giraldelli.studio@gmail.com?subject=Contato via Portfólio - Giral Studio" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A4BAD2] hover:bg-[#A4BAD2] hover:text-[#0D2A4A] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[#A4BAD2] mb-6 uppercase text-xs tracking-widest">Links Rápidos</h5>
            <ul className="space-y-4">
              <li><a href="#sobre" onClick={(e) => scrollToId(e, 'sobre')} className="text-[#DCE3ED]/70 hover:text-[#A4BAD2] transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" onClick={(e) => scrollToId(e, 'servicos')} className="text-[#DCE3ED]/70 hover:text-[#A4BAD2] transition-colors">Serviços</a></li>
              <li><a href="#projetos" onClick={(e) => scrollToId(e, 'projetos')} className="text-[#DCE3ED]/70 hover:text-[#A4BAD2] transition-colors">Portfólio</a></li>
              <li><a href="https://github.com/giraldelli?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-[#DCE3ED]/70 hover:text-[#A4BAD2] transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#A4BAD2] mb-6 uppercase text-xs tracking-widest">Contato</h5>
            <ul className="space-y-4">
              <li className="text-[#DCE3ED]/70">
                <a href="mailto:giraldelli.studio@gmail.com?subject=Contato via Portfólio - Giral Studio" className="hover:text-[#A4BAD2] transition-colors">giraldelli.studio@gmail.com</a>
              </li>
              <li className="text-[#DCE3ED]/70">
                <a href="tel:+5565981218157" className="hover:text-[#A4BAD2] transition-colors">+55 65 9 8121-8157</a>
              </li>
              <li className="text-[#DCE3ED]/70">Brasil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#DCE3ED]/40">
          <p>© 2024 Giral Studio. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#A4BAD2]">Privacidade</a>
            <a href="#" className="hover:text-[#A4BAD2]">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
