
import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Check } from 'lucide-react';
import { SERVICES } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    services: [] as string[],
    message: '',
    contactMethod: 'whatsapp' as 'whatsapp' | 'email'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(serviceTitle);
      if (isSelected) {
        return { ...prev, services: prev.services.filter(s => s !== serviceTitle) };
      } else {
        return { ...prev, services: [...prev.services, serviceTitle] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.services.length === 0) {
      alert("Por favor, selecione pelo menos um serviço.");
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`;
    const selectedServicesText = formData.services.join(', ');
    const textMessage = `Olá Gabriel! \n\n*Novo Contato via Giral Studio*\n\n*Nome:* ${fullName}\n*Serviços:* ${selectedServicesText}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message || 'Sem mensagem adicional.'}`;
    
    if (formData.contactMethod === 'whatsapp') {
      const encodedMsg = encodeURIComponent(textMessage);
      window.open(`https://wa.me/5565981218157?text=${encodedMsg}`, '_blank');
    } else {
      const subject = encodeURIComponent(`Contato Giral Studio - [${selectedServicesText}]`);
      const body = encodeURIComponent(textMessage);
      window.location.href = `mailto:giraldelli.studio@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contato" className="py-24 px-6 bg-[#DCE3ED]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#43627F] uppercase mb-4">Contato</h2>
          <h3 className="text-5xl font-display text-[#0D2A4A] mb-4">Vamos iniciar seu <span className="italic">legado digital?</span></h3>
          <p className="text-[#0D2A4A]/60 font-light">Selecione os serviços que deseja e preencha seus dados.</p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-[#43627F]/10 shadow-2xl reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200"
        >
          {/* Nome e Sobrenome */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#0D2A4A]/60 ml-1">Nome</label>
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ex: João"
                className="w-full px-6 py-4 rounded-2xl bg-[#DCE3ED]/50 border border-[#43627F]/10 focus:border-[#43627F] focus:ring-0 outline-none transition-all placeholder:text-[#0D2A4A]/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#0D2A4A]/60 ml-1">Sobrenome</label>
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ex: Silva"
                className="w-full px-6 py-4 rounded-2xl bg-[#DCE3ED]/50 border border-[#43627F]/10 focus:border-[#43627F] focus:ring-0 outline-none transition-all placeholder:text-[#0D2A4A]/30"
              />
            </div>
          </div>

          {/* Telefone */}
          <div className="mb-8 space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#0D2A4A]/60 ml-1">Telefone / WhatsApp</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full px-6 py-4 rounded-2xl bg-[#DCE3ED]/50 border border-[#43627F]/10 focus:border-[#43627F] focus:ring-0 outline-none transition-all placeholder:text-[#0D2A4A]/30"
            />
          </div>

          {/* Checklist de Serviços */}
          <div className="mb-8 space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#0D2A4A]/60 ml-1">Quais serviços você tem interesse?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((service, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleServiceToggle(service.title)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all text-left ${
                    formData.services.includes(service.title)
                      ? 'bg-[#43627F] border-[#43627F] text-white shadow-lg'
                      : 'bg-[#DCE3ED]/50 border-[#43627F]/10 text-[#0D2A4A] hover:border-[#43627F]/30'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    formData.services.includes(service.title) ? 'bg-white border-white' : 'border-[#0D2A4A]/20'
                  }`}>
                    {formData.services.includes(service.title) && <Check className="w-3 h-3 text-[#43627F]" />}
                  </div>
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleServiceToggle('Outro')}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all text-left ${
                  formData.services.includes('Outro')
                    ? 'bg-[#43627F] border-[#43627F] text-white shadow-lg'
                    : 'bg-[#DCE3ED]/50 border-[#43627F]/10 text-[#0D2A4A] hover:border-[#43627F]/30'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                  formData.services.includes('Outro') ? 'bg-white border-white' : 'border-[#0D2A4A]/20'
                }`}>
                  {formData.services.includes('Outro') && <Check className="w-3 h-3 text-[#43627F]" />}
                </div>
                <span className="text-sm font-medium">Outro projeto sob medida</span>
              </button>
            </div>
          </div>

          {/* Mensagem */}
          <div className="space-y-2 mb-8">
            <label className="text-xs font-bold uppercase tracking-widest text-[#0D2A4A]/60 ml-1">Mensagem (Opcional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Conte um pouco sobre sua ideia..."
              className="w-full px-6 py-4 rounded-2xl bg-[#DCE3ED]/50 border border-[#43627F]/10 focus:border-[#43627F] focus:ring-0 outline-none transition-all placeholder:text-[#0D2A4A]/30 resize-none"
            ></textarea>
          </div>

          {/* Método de Contato e Envio */}
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex bg-[#DCE3ED]/50 p-1.5 rounded-2xl border border-[#43627F]/10">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, contactMethod: 'whatsapp' }))}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  formData.contactMethod === 'whatsapp' 
                  ? 'bg-[#25D366] text-white shadow-lg' 
                  : 'text-[#0D2A4A]/60 hover:text-[#0D2A4A]'
                }`}
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, contactMethod: 'email' }))}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  formData.contactMethod === 'email' 
                  ? 'bg-[#0D2A4A] text-[#DCE3ED] shadow-lg' 
                  : 'text-[#0D2A4A]/60 hover:text-[#0D2A4A]'
                }`}
              >
                <Mail className="w-4 h-4" /> E-mail
              </button>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-[#0D2A4A] text-[#DCE3ED] rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-[#43627F] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#0D2A4A]/10"
            >
              Enviar Mensagem <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
