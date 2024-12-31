import React from 'react';
import { ListChecks } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ListChecks size={32} className="text-white" />
          <h1 className="text-2xl font-bold">Lista de Compras Inteligente</h1>
        </div>
      </div>
    </header>
  );
}