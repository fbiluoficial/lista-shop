import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddItemForm } from './components/AddItemForm';
import { ShoppingList } from './components/ShoppingList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Search } from 'lucide-react';
import { Item } from './types';

export default function App() {
  const [items, setItems] = useLocalStorage<Item[]>('shopping-list', []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddItem = (name: string, category: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      name,
      category,
      completed: false,
      createdAt: new Date(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleToggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          <AddItemForm onAddItem={handleAddItem} />
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar itens..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
            />
          </div>

          {filteredItems.length > 0 ? (
            <ShoppingList
              items={filteredItems}
              onToggleItem={handleToggleItem}
              onDeleteItem={handleDeleteItem}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum item na sua lista de compras ainda.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}