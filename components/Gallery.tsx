
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-red-600 uppercase tracking-widest">Momentos Ikura</h3>
          <h2 className="text-4xl md:text-6xl font-bold">Galeria Premium</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="relative h-80 overflow-hidden group">
              <img 
                src={img} 
                alt={`Galeria ${idx}`} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="p-4 border-2 border-white scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-widest font-bold">Ver Ikura</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
