import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { categories } from '../data/categories';

interface AddItemFormProps {
  onAddItem: (name: string, category: string) => void;
}

export function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddItem(name.trim(), category);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adicionar novo item..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
        />
        <div className="flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-base flex-1 sm:flex-none"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95 transition-transform"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </form>
  );
}