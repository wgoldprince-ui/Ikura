
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1920&auto=format&fit=crop" 
          alt="Premium Sushi" 
          className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      {/* Japanese pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-red-600 text-lg md:text-xl uppercase tracking-[0.3em] mb-4 font-medium animate-[fadeInDown_1s_ease-out]">
          Experiência Premium
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight animate-[fadeIn_1.5s_ease-out]">
          O verdadeiro sabor da <br /> 
          <span className="gold-text">culinária japonesa</span> <br /> 
          em Luanda
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 animate-[fadeInUp_1s_ease-out]">
          <a 
            href="#cardapio" 
            className="w-full md:w-auto px-10 py-4 border-2 border-white/50 hover:border-red-600 hover:text-red-600 transition-all text-sm font-bold uppercase tracking-widest rounded-none"
          >
            Ver Cardápio
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white transition-all text-sm font-bold uppercase tracking-widest rounded-none shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-red-600"></div>
      </div>
    </section>
  );
};

export default Hero;
