import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory-50 text-center px-6">
      <div className="max-w-md space-y-6">
        <span className="font-display text-7xl font-bold text-gold-600 block">404</span>
        <h1 className="font-display text-3xl font-semibold text-navy-800">
          Página não encontrada
        </h1>
        <p className="text-xs text-gray-600 leading-relaxed">
          O conteúdo solicitado pode ter sido movido ou não está mais disponível no portal institucional da Almaris International Trade.
        </p>
        <div>
          <Link href="/" className="btn-primary text-xs">
            Retornar à página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
