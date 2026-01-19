
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mim', href: 'sobre' },
    { name: 'Serviços', href: 'servicos' },
    { name: 'Processo', href: 'processo' },
    { name: 'Projetos', href: 'projetos' },
    { name: 'Personalidade', href: 'valores' },
    { name: 'Contato', href: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Ajuste para a altura do Navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#DCE3ED]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center group" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img 
            src="https://i.imgur.com/pW2a4ev.png" 
            alt="Giral Studio Logo" 
            className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium hover:text-[#43627F] transition-colors relative group text-[#0D2A4A]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#43627F] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://github.com/giraldelli?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#43627F] text-[#DCE3ED] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#0D2A4A]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#DCE3ED] border-t border-[#43627F]/10 overflow-hidden transition-all duration-300 shadow-xl ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              className="text-lg font-medium text-[#0D2A4A]"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com/giraldelli?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-[#43627F]"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
