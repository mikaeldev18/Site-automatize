export default function Services() {
  const services = [
    {
      icon: '📊',
      title: 'Diagnóstico & Estratégia',
      description: 'Análise completa do seu negócio, mercado e concorrência para criar uma estratégia de marketing robusta e alinhada com seus objetivos.',
    },
    {
      icon: '🎯',
      title: 'Planejamento de Campanhas',
      description: 'Planejamento detalhado de campanhas em múltiplos canais com cronograma definido, orçamento otimizado e KPIs mensuráveis.',
    },
    {
      icon: '🌱',
      title: 'Crescimento Orgânico de Mídias Sociais',
      description: 'Estratégia de posicionamento, aumento de seguidores qualificados, otimização de perfis e técnicas de viralização orgânica sem gastos com anúncios.',
    },
    {
      icon: '💻',
      title: 'Marketing Digital',
      description: 'Google Ads, Facebook/Instagram Ads, SEO, Email Marketing e automação para capturar e converter leads qualificados.',
    },
    {
      icon: '📧',
      title: 'Funil de Vendas',
      description: 'Otimização completa do funil de vendas, automação de follow-up e nutrição de leads para aumentar conversão.',
    },
    {
      icon: '📈',
      title: 'Analytics & Relatórios',
      description: 'Análise profunda de dados, relatórios mensais detalhados e insights acionáveis para melhorias contínuas.',
    },
  ];

  return (
    <section id="servicos" className="py-20 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma solução completa de marketing que cobre todas as necessidades da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
