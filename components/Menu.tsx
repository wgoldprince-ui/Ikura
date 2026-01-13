
import React, { useState } from 'react';
import { MENU_DATA, WHATSAPP_LINK } from '../constants';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);

  return (
    <section id="cardapio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-red-600 uppercase tracking-widest">A Arte do Sabor</h3>
          <h2 className="text-4xl md:text-6xl font-bold">Nosso Cardápio</h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 no-scrollbar overflow-x-auto">
          {MENU_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 text-xs uppercase tracking-widest font-bold transition-all ${
                activeTab === cat.id 
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
                : 'border border-white/10 text-white/50 hover:border-white/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {MENU_DATA.find(c => c.id === activeTab)?.items.map((item) => (
            <div key={item.id} className="group bg-zinc-900 border border-white/5 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-black/80 px-4 py-2 border-r-2 border-red-600">
                  <span className="text-sm font-bold gold-text">{item.price}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-red-600 font-bold">{item.category}</span>
                   <h4 className="text-xl font-bold group-hover:text-red-600 transition-colors mt-1">{item.name}</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{item.description}</p>
                <a 
                  href={`${WHATSAPP_LINK}?text=Olá! Gostaria de pedir o ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 border border-red-600/30 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all text-[10px] uppercase tracking-widest font-bold"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
