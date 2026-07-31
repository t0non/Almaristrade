"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory-50 text-center px-6">
      <div className="max-w-md space-y-6">
        <span className="font-display text-5xl font-bold text-navy-800 block">Erro de Execução</span>
        <h1 className="font-display text-2xl font-semibold text-navy-800">
          Ocorreu um erro temporário de sistema
        </h1>
        <p className="text-xs text-gray-600 leading-relaxed">
          Nossa equipe técnica foi notificada. Por favor, tente recarregar esta página ou navegar para a página inicial.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="btn-gold text-xs">
            Tentar novamente
          </button>
          <Link href="/" className="btn-primary text-xs">
            Ir para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}
