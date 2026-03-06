export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <span className="text-sm font-semibold text-gray-700">🚀 Transforme seu Marketing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight animate-slide-up">
          Assessoria de Marketing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
            Completa para sua Empresa
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Estratégias comprovadas que geram resultados. Desde planejamento até execução,
          otimização de canais e análise de dados para impulsionar seu faturamento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition hover:scale-105 duration-300">
            Solicitar Proposta
          </button>
          <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition hover:scale-105 duration-300">
            Ver Demonstração
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-8 border-t border-gray-200 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold text-black">150+</div>
            <p className="text-sm text-gray-600">Empresas Atendidas</p>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold text-black">5+</div>
            <p className="text-sm text-gray-600">Anos de Experiência</p>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold text-black">300%</div>
            <p className="text-sm text-gray-600">ROI Médio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
