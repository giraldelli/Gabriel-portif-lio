
import React from 'react';
import { 
  Palette, Search, Lightbulb, Rocket, Monitor, Smartphone, 
  Globe, PenTool, Shield, Heart, Zap, Sparkles, 
  Users, ClipboardList, Settings, Code, CheckCircle, Eye, Wrench 
} from 'lucide-react';
import { Project, Service, Value } from './types';

export const COLORS = {
  SAGE: '#A4BAD2',
  CREAM: '#DCE3ED',
  DEEP_BLUE: '#0D2A4A',
  TERRACOTTA: '#43627F',
};

export const SERVICES: Service[] = [
  {
    title: 'Criação de Sites (landing page)',
    description: 'Landing pages de alta conversão e sites institucionais com design exclusivo e performance otimizada.',
    icon: <Monitor className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Identidade Visual',
    description: 'Branding completo e manuais de marca que capturam a essência do seu negócio.',
    icon: <Palette className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Apps desktop',
    description: 'Aplicativos mobile nativos e híbridos focados em usabilidade e experiência do usuário.',
    icon: <Smartphone className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Webapps (Sistemas em sites)',
    description: 'Sistemas web robustos, dashboards e plataformas SaaS escaláveis.',
    icon: <Globe className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Design digital (imagens, posts comerciais, etc)',
    description: 'Interfaces de usuário com refinamento estético e foco na jornada do cliente.',
    icon: <PenTool className="w-6 h-6" />,
    color: '#A4BAD2',
  },
];

export const PROCESS_STAGES = [
  {
    title: 'Briefing com o Cliente',
    subtitle: 'Alinhamento Inicial',
    description: 'O cliente dirá tudo o que ele deseja no seu produto digital para definirmos a direção.',
    icon: <Users className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Especificações técnicas',
    subtitle: 'Planejamento e Ferramentas',
    description: 'O que é possível fazer? Como será feito? Quais ferramentas serão utilizadas para garantir a qualidade.',
    icon: <ClipboardList className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Desenvolvimento',
    subtitle: 'Mão na Massa',
    description: 'Nessa etapa começará a produção do produto, transformando o plano em código e design.',
    icon: <Code className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Teste',
    subtitle: 'Garantia de Qualidade',
    description: 'Serão feitos testes nas funcionalidades e serviços que o cliente solicitou para evitar erros.',
    icon: <CheckCircle className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Review',
    subtitle: 'Refinamento Final',
    description: 'Revisão junto ao cliente rumo à implementação ou avaliação de mudanças e adição de conteúdo.',
    icon: <Eye className="w-6 h-6" />,
    color: '#A4BAD2',
  },
  {
    title: 'Publicação',
    subtitle: 'Lançamento oficial',
    description: 'Implementação do produto, entrega/hospedagem e informação completa ao cliente.',
    icon: <Rocket className="w-6 h-6" />,
    color: '#43627F',
  },
  {
    title: 'Manutenção contínua',
    subtitle: 'Cuidado e Evolução',
    description: 'Atualizações e manutenções preventivas e corretivas com taxas mensais ou pacotes anuais.',
    icon: <Wrench className="w-6 h-6" />,
    color: '#0D2A4A',
  },
];

export const VALUES: Value[] = [
  {
    title: 'Transparência',
    description: 'Comunicação clara e processos abertos em cada etapa do projeto.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Arte e Técnica',
    description: 'Equilíbrio perfeito entre a precisão do código e a sensibilidade do design.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Agilidade',
    description: 'Entregas rápidas sem perder o toque artesanal e a atenção aos detalhes.',
    icon: <Zap className="w-6 h-6" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'trimera-universe',
    title: 'Trimera Universe',
    category: 'Híbrido',
    description: 'Exploração de um universo digital imersivo, combinando narrativas visuais épicas com uma interface de alta performance e interações fluidas.',
    link: 'https://github.com/giraldelli/trimeraProject',
    image: 'https://i.imgur.com/daJKQE9.png',
  },
  {
    id: 'camila-maria',
    title: 'Psicóloga Camila Maria',
    category: 'Design',
    description: 'Uma presença digital acolhedora e minimalista, focada na experiência do paciente e em uma identidade visual que transmite serenidade e confiança.',
    link: 'https://github.com/giraldelli/CamilaProjectPsico',
    image: 'https://i.imgur.com/PjVl9lC.png',
  },
  {
    id: 'conversor-ofx',
    title: 'Conversor para OFX',
    category: 'Software',
    description: 'Ferramenta de produtividade financeira focada em automação e precisão, transformando dados complexos em formatos amigáveis com simplicidade.',
    link: 'https://github.com/giraldelli/Conversor-para-OFX',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
  },
];
