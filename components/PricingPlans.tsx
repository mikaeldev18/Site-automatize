'use client';

import { useState } from 'react';

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');

  const plans = [
    {
      id: 'basic',
      name: 'Plano Otimizado',
      initialPrice: 900,
      initialMonths: 3,
      recurringPrice: 1300,
      badge: 'Mais Procurado',
      features: [
        'Diagnóstico estratégico inicial',
        'Estratégia de crescimento orgânico em 2 plataformas',
        '1 campanha digital por mês',
        'Relatórios mensais básicos',
        'Suporte por email',
        'Variável por resultado de faturamento',
      ],
      highlight: true,
    },
    {
      id: 'premium',
      name: 'Plano Completo',
      initialPrice: 1500,
      initialMonths: 3,
      recurringPrice: 1900,
      badge: 'Premium',
      features: [
        'Diagnóstico estratégico completo',
        'Estratégia de crescimento em todas as plataformas sociais',
        'Campanhas digitais ilimitadas',
        'Relatórios quinzenais detalhados',
        'Suporte prioritário 24h',
        'Análise profunda de concorrência',
        'Otimização contínua de funis',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="precos" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Planos Personalizados
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o plano que melhor se adequa ao seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? 'ring-2 ring-black shadow-xl scale-105'
                  : 'border border-gray-200'
              } p-8 bg-white`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Procurado
                </div>
              )}

              <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">Primeiros 3 meses</p>

              <div className="mb-2">
                <span className="text-5xl font-bold text-black">R$ {plan.initialPrice}</span>
                <span className="text-gray-600 text-lg">/mês</span>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Após 3 meses: <span className="font-semibold text-black">R$ {plan.recurringPrice}/mês</span>
              </p>

              {plan.id === 'basic' && (
                <p className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded p-3 mb-6">
                  <span className="font-semibold text-blue-900">Variável por resultado:</span> Bonificação adicional de acordo com o crescimento do faturamento
                </p>
              )}

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlight
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border-2 border-black text-black hover:bg-gray-50'
                }`}
              >
                Escolher Plano
              </button>

              <div className="space-y-4">
                <p className="font-semibold text-black">O que está incluído:</p>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-black font-bold text-lg">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-black mb-6">Estrutura de Preço Detalhada</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-black mb-4">Plano Inicial - R$ 900/mês</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Primeiros 3 meses: <span className="font-semibold">R$ 900/mês</span></li>
                <li>• A partir do 4º mês: <span className="font-semibold">R$ 1.300/mês</span></li>
                <li>• Bônus: Até <span className="font-semibold">20% extra</span> por crescimento de faturamento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Plano Completo - R$ 1.500/mês</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Primeiros 3 meses: <span className="font-semibold">R$ 1.500/mês</span></li>
                <li>• A partir do 4º mês: <span className="font-semibold">R$ 1.900/mês</span></li>
                <li>• Preço <span className="font-semibold">fixo</span> sem variações</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
