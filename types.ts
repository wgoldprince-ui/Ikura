
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
