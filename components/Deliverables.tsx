export default function Deliverables() {
  const monthlyDeliverables = [
    'Relatório estratégico de performance',
    'Análise de ROI de campanhas',
    'Recomendações de otimização',
    'Planejamento para próximo mês',
    'Dashboard atualizado em tempo real',
  ];

  const implementationSections = [
    {
      category: 'Estratégia de Conteúdo Orgânico',
      items: [
        'Estratégia de conteúdo para crescimento orgânico',
        'Otimização de perfis e bios em redes sociais',
        'Copy e captions otimizados para engajamento',
        'Técnicas de viralização sem gastos com anúncios',
      ],
    },
    {
      category: 'Gestão de Campanhas',
      items: [
        'Criação de anúncios em Google e Meta',
        'Segmentação e targeting avançado',
        'A/B testing contínuo',
        'Otimização de budget de anúncios',
      ],
    },
    {
      category: 'Analytics & Dados',
      items: [
        'Rastreamento de todas as conversões',
        'Análise de funil de vendas',
        'Relatórios de atribuição',
        'Insights de comportamento do cliente',
      ],
    },
    {
      category: 'Suporte & Consultoria',
      items: [
        'Reuniões estratégicas mensais',
        'Consultoria sob demanda',
        'Treinamento de sua equipe',
        'Acesso a ferramentas premium',
      ],
    },
  ];

  return (
    <section id="entregaveis" className="py-20 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Entregáveis Mensais
          </h2>
          <p className="text-lg text-gray-600">
            Saiba exatamente o que você vai receber em cada mês
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Relatórios & Documentos</h3>
            <div className="space-y-4">
              {monthlyDeliverables.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-black text-lg">📄</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Reuniões & Consultoria</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-black text-lg">🤝</span>
                <div>
                  <p className="font-semibold text-black">Reunião Estratégica Mensal</p>
                  <p className="text-sm text-gray-600">Alinhamento de objetivos e resultados</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-black text-lg">💬</span>
                <div>
                  <p className="font-semibold text-black">Suporte Contínuo</p>
                  <p className="text-sm text-gray-600">Via email, chat ou video call</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-black text-lg">🎓</span>
                <div>
                  <p className="font-semibold text-black">Treinamento</p>
                  <p className="text-sm text-gray-600">Para sua equipe usar as ferramentas</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-black text-lg">📊</span>
                <div>
                  <p className="font-semibold text-black">Acesso a Dashboards</p>
                  <p className="text-sm text-gray-600">Visualização em tempo real dos dados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 mb-16">
          <h3 className="text-2xl font-bold mb-8">Implementação Completa</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {implementationSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  {section.category}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-100">
                      <span>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-black mb-4">📌 O que está GARANTIDO:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-gray-700">✓ Aumento comprovado de visibilidade</p>
            <p className="text-gray-700">✓ Crescimento consistente de leads</p>
            <p className="text-gray-700">✓ Melhoria de taxa de conversão</p>
            <p className="text-gray-700">✓ ROI positivo dentro de 90 dias</p>
            <p className="text-gray-700">✓ Dedicação de time especializado</p>
            <p className="text-gray-700">✓ Transparência total de resultados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
