export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Pronto para transformar seu marketing?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Encomece a ver resultados em 30 dias. Centenas de empresas já crescem com a Automatize.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
            Agendar Consultoria Grátis
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition">
            Enviar WhatsApp
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          🎁 Bônus: Diagnóstico gratuito de sua estratégia de marketing + Relatório de oportunidades
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-700">
        <h3 className="text-2xl font-bold mb-8 text-center">Dúvidas Frequentes</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Quanto tempo até ver resultados?</h4>
            <p className="text-gray-300">Normalmente entre 30-45 dias, mas muitos clientes relatam melhorias já na primeira semana.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Posso cancelar quando quiser?</h4>
            <p className="text-gray-300">Sim! Sem contrato de fidelização. Você pode cancelar a qualquer momento com 30 dias de aviso.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Qual é o mínimo de empresa para contratar?</h4>
            <p className="text-gray-300">Atendemos desde startups até grandes empresas. O importante é ter disponibilidade para estratégia.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Como funciona a variável por resultado?</h4>
            <p className="text-gray-300">No Plano Inicial, você paga um bônus de até 20% se o faturamento crescer acima da meta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
