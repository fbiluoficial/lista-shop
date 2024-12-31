import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Item } from '../types';
import { categories } from '../data/categories';

interface ShoppingListProps {
  items: Item[];
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export function ShoppingList({ items, onToggleItem, onDeleteItem }: ShoppingListProps) {
  const sortedItems = [...items].sort((a, b) => {
    if (a.completed === b.completed) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-3">
      {sortedItems.map((item) => {
        const category = categories.find((c) => c.id === item.category);
        const Icon = category?.icon;

        return (
          <div
            key={item.id}
            className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transition-all ${
              item.completed ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <button
                onClick={() => onToggleItem(item.id)}
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 active:scale-95 ${
                  item.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
                aria-label={item.completed ? "Marcar como incompleto" : "Marcar como completo"}
              >
                {item.completed && <Check size={16} className="text-white" />}
              </button>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-lg truncate ${
                    item.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </span>
                <span className="text-gray-500 text-sm hidden sm:block">{category?.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-4 flex-shrink-0">
              <button
                onClick={() => onDeleteItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 active:scale-95"
                aria-label="Excluir item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}