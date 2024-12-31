import { Category } from '../types';
import { Apple, Baby, Book, Car, Coffee, Gift, Home, ShoppingBag } from 'lucide-react';

export const categories: Category[] = [
  { id: 'groceries', name: 'Mercado', icon: ShoppingBag },
  { id: 'fruits', name: 'Frutas & Legumes', icon: Apple },
  { id: 'beverages', name: 'Bebidas', icon: Coffee },
  { id: 'household', name: 'Casa', icon: Home },
  { id: 'baby', name: 'Bebê', icon: Baby },
  { id: 'books', name: 'Livros', icon: Book },
  { id: 'automotive', name: 'Automotivo', icon: Car },
  { id: 'gifts', name: 'Presentes', icon: Gift },
];