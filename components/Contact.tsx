
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-red-600 uppercase tracking-widest font-medium">Onde Estamos</h3>
              <h2 className="text-4xl md:text-6xl font-bold">Venha nos visitar</h2>
              <p className="text-zinc-500 max-w-md">Sinta a atmosfera premium do melhor sushi de Luanda em um ambiente sofisticado e acolhedor.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Endereço</h4>
                  <p className="text-zinc-400">Luanda – Morro Bento (Kikagil)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Telefone & WhatsApp</h4>
                  <p className="text-zinc-400">{WHATSAPP_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Horário</h4>
                  <p className="text-zinc-400">Terça a Domingo: 12h às 23h</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
               <a 
                 href={WHATSAPP_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all rounded-none"
               >
                 Fazer Pedido Agora
               </a>
            </div>
          </div>

          <div className="h-[500px] w-full bg-zinc-900 border border-white/10 relative overflow-hidden">
            {/* Google Maps Embed Placeholder - Using a stylish dark map overlay */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.364421447025!2d13.2081708!3d-8.9168403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15155555555%3A0x5555555555555555!2sMorro%20Bento%2C%20Luanda%2C%20Angola!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
