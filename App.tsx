
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAnimator from './components/AIAnimator';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Basic reveal animation on scroll using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <About />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Menu />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Gallery />
        </div>

        {/* AI Animator Feature Section */}
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <AIAnimator />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Testimonials />
        </div>

        {/* Delivery Info Banner */}
        <section className="py-20 bg-red-600 overflow-hidden relative group">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
           <div className="container mx-auto px-6 text-center space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold">Entrega Rápida em Toda Luanda</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Fazemos entregas rápidas em Luanda. Seu sushi chega fresco, bem embalado e pronto para saborear.
              </p>
              <div className="pt-4">
                 <a 
                   href={WHATSAPP_LINK}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block px-12 py-4 bg-white text-red-600 font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all shadow-xl"
                 >
                   Pedir Delivery
                 </a>
              </div>
           </div>
        </section>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating WhatsApp Action */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-black/80 text-white text-[10px] uppercase tracking-widest py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Peça pelo WhatsApp
        </span>
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
};

export default App;
