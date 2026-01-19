
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Values from './components/Values';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Reveal animation logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#DCE3ED]">
      <Navbar />
      
      <section id="home">
        <div className="transition-all duration-1000 opacity-0 reveal">
          <Hero />
        </div>
      </section>
      
      <section id="sobre" className="relative">
        <div className="transition-all duration-1000 opacity-0 translate-y-10 reveal">
          <About />
        </div>
      </section>
      
      <section id="servicos" className="relative">
        <div className="transition-all duration-1000 opacity-0 translate-y-10 reveal">
          <Services />
        </div>
      </section>

      <section id="processo" className="relative">
        <div className="transition-all duration-1000 opacity-0 translate-y-10 reveal">
          <Process />
        </div>
      </section>
      
      <section id="projetos" className="relative">
        <div className="transition-all duration-1000 opacity-0 translate-y-10 reveal">
          <Projects />
        </div>
      </section>
      
      <section id="valores" className="relative">
        <div className="transition-all duration-1000 opacity-0 translate-y-10 reveal">
          <Values />
        </div>
      </section>

      <ContactForm />
      
      <Footer />

      {/* Floating Back to Top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#43627F] text-[#DCE3ED] rounded-full flex items-center justify-center shadow-3xl hover:scale-110 transition-all duration-500 transform ${
          showScrollButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <span className="text-2xl font-bold">↑</span>
      </button>
    </main>
  );
};

export default App;
