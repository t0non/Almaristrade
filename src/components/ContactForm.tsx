"use client";

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';

interface ContactFormProps {
  initialPathway?: 'conversa' | 'cotacao' | 'viabilidade';
}

export default function ContactForm({ initialPathway = 'cotacao' }: ContactFormProps) {
  const [pathway, setPathway] = useState<'conversa' | 'cotacao' | 'viabilidade'>(initialPathway);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    role: '',
    country: '',
    email: '',
    phone: '',
    product: '',
    volume: '',
    frequency: 'spot',
    destination: '',
    incoterm: 'FOB',
    timeframe: 'imediato',
    message: '',
    privacyConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.email || !formData.company || !formData.country) {
      setErrorMessage('Por favor, preencha todos os campos corporativos obrigatórios (*).');
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage('É necessário aceitar os termos de tratamento confidencial de dados.');
      return;
    }

    setIsSubmitting(true);

    // Simulação de registro seguro e notificação de e-mail institucional
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // WhatsApp Message Generator
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, equipe comercial da Almaris International Trade.\n\n` +
      `Gostaria de solicitar atendimento B2B:\n` +
      `- Nome: ${formData.fullName || 'Não informado'}\n` +
      `- Empresa: ${formData.company || 'Não informada'}\n` +
      `- País: ${formData.country || 'Não informado'}\n` +
      `- Produto de Interesse: ${formData.product || 'Consulta geral'}\n` +
      `- Volume Estimado: ${formData.volume || 'A definir'}`
    );
    return `https://wa.me/5511999999999?text=${text}`;
  };

  return (
    <div className="bg-white border border-border-200 p-6 md:p-10 shadow-sm rounded-sm">
      {/* Caminhos de Atendimento */}
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 block mb-3">
          Selecione o Objetivo do Atendimento
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setPathway('conversa')}
            className={`p-3 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all text-center ${
              pathway === 'conversa'
                ? 'bg-navy-800 text-white border-navy-800'
                : 'bg-ivory-50 text-gray-600 border-border-200 hover:border-navy-800'
            }`}
          >
            1. Agendar uma Conversa
          </button>

          <button
            type="button"
            onClick={() => setPathway('cotacao')}
            className={`p-3 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all text-center ${
              pathway === 'cotacao'
                ? 'bg-navy-800 text-white border-navy-800'
                : 'bg-ivory-50 text-gray-600 border-border-200 hover:border-navy-800'
            }`}
          >
            2. Solicitar uma Cotação
          </button>

          <button
            type="button"
            onClick={() => setPathway('viabilidade')}
            className={`p-3 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all text-center ${
              pathway === 'viabilidade'
                ? 'bg-navy-800 text-white border-navy-800'
                : 'bg-ivory-50 text-gray-600 border-border-200 hover:border-navy-800'
            }`}
          >
            3. Consultar Viabilidade
          </button>
        </div>
      </div>

      {isSuccess ? (
        <div className="bg-ivory-50 border-l-4 border-success-700 p-6 rounded-sm space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-success-700 text-white flex items-center justify-center font-bold">✓</span>
            <div>
              <h4 className="font-display text-xl text-navy-800">Solicitação Recebida com Sucesso</h4>
              <p className="text-xs text-gray-600">Sua demanda foi registrada sob protocolo institucional confidencial.</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nossa equipe de operações e comércio exterior analisará a viabilidade comercial e responderá em até <strong>24 horas úteis</strong> pelo e-mail <code>{formData.email}</code>.
          </p>

          <div className="pt-4 border-t border-border-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: '', company: '', role: '', country: '', email: '', phone: '',
                  product: '', volume: '', frequency: 'spot', destination: '', incoterm: 'FOB',
                  timeframe: 'imediato', message: '', privacyConsent: false
                });
              }}
              className="btn-link-editorial text-xs"
            >
              Enviar nova solicitação
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-2.5 px-4 text-xs"
            >
              Acelerar atendimento via WhatsApp Direct &rarr;
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-50 border-l-4 border-error-700 p-4 text-xs text-error-700 font-medium">
              {errorMessage}
            </div>
          )}

          {/* Dados Pessoais / Corporativos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Representante ou Diretor de Compras"
                required
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                E-mail Corporativo *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nome@empresa.com"
                required
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Empresa / Instituição *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Razão Social ou Trade Name"
                required
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Cargo / Função
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Ex: Procurement Director"
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                País de Destino *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Ex: Espanha, Emirados Árabes..."
                required
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>
          </div>

          {/* Dados do Pedido / Cotação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-border-subtle">
            <div>
              <label htmlFor="product" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Produto de Interesse
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              >
                <option value="">Selecione o produto...</option>
                {PRODUCTS.map(p => (
                  <option key={p.slug} value={p.slug}>{p.title}</option>
                ))}
                <option value="outro">Outra demanda agrícola/mineral</option>
              </select>
            </div>

            <div>
              <label htmlFor="volume" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Volume Estimado (MT / FCL)
              </label>
              <input
                type="text"
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="Ex: 500 MT / 10 contêineres"
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="incoterm" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
                Incoterm Desejado
              </label>
              <select
                id="incoterm"
                name="incoterm"
                value={formData.incoterm}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors"
              >
                <option value="FOB">FOB (Porto de Origem)</option>
                <option value="CIF">CIF (Porto de Destino)</option>
                <option value="CFR">CFR (Cost & Freight)</option>
                <option value="EXW">EXW (Fábrica / Origem)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase text-graphite-900 mb-1">
              Especificações Técnicas ou Mensagem Adicional
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva requisitos contratuais, porto de destino (POD) ou perfil de consumo da sua empresa..."
              className="w-full px-3.5 py-2.5 bg-ivory-50 border border-border-200 rounded-sm text-sm text-graphite-900 focus:bg-white focus:outline-none focus:border-navy-800 transition-colors resize-y"
            />
          </div>

          {/* Consentimento */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 accent-navy-800 w-4 h-4"
              required
            />
            <label htmlFor="privacyConsent" className="text-xs text-gray-600 leading-relaxed">
              Declaro que os dados fornecidos representam uma instituição comercial válida e concordo com o processamento confidencial das informações sob as diretrizes de privacidade da Almaris International Trade.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full sm:w-auto text-xs py-3.5 px-8"
            >
              {isSubmitting ? 'Processando Solicitação...' : 'Enviar Solicitação Comercial'}
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-navy-800 hover:text-gold-600 transition-colors flex items-center gap-1.5"
            >
              Ou falar via WhatsApp Direct &rarr;
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
