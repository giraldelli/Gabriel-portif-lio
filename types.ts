
// Fix: Added React import to define the React namespace for React.ReactNode types
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Software' | 'Design' | 'Híbrido';
  description: string;
  link: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}