
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-red-600/30 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <img 
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&h=1000&auto=format&fit=crop" 
            alt="Sushi Preparation" 
            className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
          <div className="absolute top-8 left-8 bg-black/80 p-6 border-l-4 border-red-600">
             <span className="text-4xl font-serif text-white">2024</span>
             <p className="text-xs uppercase tracking-widest mt-2 opacity-60">Excelência em Luanda</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-red-600 uppercase tracking-widest font-medium">Nossa História</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ikura Sushi: <br /> Tradição e Inovação</h2>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            O Ikura Sushi é um restaurante especializado em sushi premium, oferecendo ingredientes frescos, técnicas tradicionais japonesas e um toque moderno. 
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Cada prato é preparado com excelência para proporcionar uma experiência gastronômica única em Luanda. Nosso compromisso é com o frescor e a arte da cutelaria japonesa, elevando cada peça ao status de obra-prima.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <span className="text-3xl font-serif gold-text">100%</span>
              <p className="text-xs uppercase tracking-widest opacity-60">Frescor Diário</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl font-serif gold-text">Chef</span>
              <p className="text-xs uppercase tracking-widest opacity-60">Especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
