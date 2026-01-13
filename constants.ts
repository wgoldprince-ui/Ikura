
import { Category, Testimonial } from './types';

export const WHATSAPP_NUMBER = "+244948120943";
export const WHATSAPP_LINK = `https://wa.me/244948120943`;

export const MENU_DATA: Category[] = [
  {
    id: 'tradicional',
    name: 'Sushi Tradicional',
    items: [
      { id: 't1', name: 'Nigiri Salmão', description: 'Dupla de fatias finas de salmão sobre arroz japonês.', price: '5.500 KZ', image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&h=400&auto=format&fit=crop', category: 'Nigiri' },
      { id: 't2', name: 'Sashimi Atum', description: '5 fatias de atum fresco selecionado.', price: '7.000 KZ', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=400&h=400&auto=format&fit=crop', category: 'Sashimi' },
      { id: 't3', name: 'Hosomaki Pepino', description: '8 unidades de enrolado fino de alga, arroz e pepino.', price: '3.500 KZ', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400&h=400&auto=format&fit=crop', category: 'Hosomaki' },
    ]
  },
  {
    id: 'especial',
    name: 'Sushi Especial',
    items: [
      { id: 'e1', name: 'Philadelphia Roll', description: 'Salmão, cream cheese e cebolinho.', price: '6.500 KZ', image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=400&h=400&auto=format&fit=crop', category: 'Philadelphia' },
      { id: 'e2', name: 'Hot Philadelphia', description: 'Enrolado frito com salmão e cream cheese.', price: '6.900 KZ', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4151?q=80&w=400&h=400&auto=format&fit=crop', category: 'Hot Philadelphia' },
      { id: 'e3', name: 'Tempura Roll', description: 'Camarão empanado, arroz e nori.', price: '7.500 KZ', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=400&h=400&auto=format&fit=crop', category: 'Tempura Rolls' },
      { id: 'e4', name: 'Ikura Special', description: 'Mix de salmão, ovas de ikura e molho do chef.', price: '9.000 KZ', image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=400&h=400&auto=format&fit=crop', category: 'Ikura Rolls' },
    ]
  },
  {
    id: 'temakis',
    name: 'Temakis',
    items: [
      { id: 'tm1', name: 'Temaki Salmão', description: 'Cone de alga crocante com salmão fresco picado.', price: '6.000 KZ', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&h=400&auto=format&fit=crop', category: 'Salmão' },
      { id: 'tm2', name: 'Temaki Philadelphia', description: 'Salmão com cream cheese abundante.', price: '6.800 KZ', image: 'https://images.unsplash.com/photo-1625938140722-26e528392ffe?q=80&w=400&h=400&auto=format&fit=crop', category: 'Philadelphia' },
      { id: 'tm3', name: 'Temaki Hot', description: 'Cone de sushi frito com recheio cremoso.', price: '7.200 KZ', image: 'https://images.unsplash.com/photo-1590044591635-08710182c821?q=80&w=400&h=400&auto=format&fit=crop', category: 'Hot' },
    ]
  },
  {
    id: 'combos',
    name: 'Combos',
    items: [
      { id: 'c1', name: 'Combo Família', description: '60 peças variadas (Sashimi, Nigiri, Uramaki e Hot).', price: '28.000 KZ', image: 'https://images.unsplash.com/photo-1562436260-8c9216eeb703?q=80&w=400&h=400&auto=format&fit=crop', category: 'Combo Família' },
      { id: 'c2', name: 'Combo Casal', description: '32 peças selecionadas para uma experiência romântica.', price: '16.500 KZ', image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=400&h=400&auto=format&fit=crop', category: 'Combo Casal' },
      { id: 'c3', name: 'Combo Especial Ikura', description: '40 peças premium com o melhor da casa.', price: '22.000 KZ', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&h=400&auto=format&fit=crop', category: 'Combo Especial Ikura' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Carla Mendes', text: 'O melhor sushi de Luanda, simplesmente incrível! O frescor é incomparável.', rating: 5 },
  { id: '2', name: 'João Paulo', text: 'Entrega rápida e sushi super fresco. A embalagem é premium.', rating: 5 },
  { id: '3', name: 'Aline Sousa', text: 'Qualidade premium, recomendo muito! O atendimento é nota dez.', rating: 4 },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600',
  'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=600',
  'https://images.unsplash.com/photo-1579584425555-c3ce17fd4151?q=80&w=600',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600',
  'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=600',
  'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=600',
];
