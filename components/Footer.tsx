export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <svg
                className="w-14 h-14"
                viewBox="0 0 240 240"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Automatize Logo"
              >
                {/* White rounded square background */}
                <rect x="20" y="20" width="200" height="200" rx="35" fill="white" />

                {/* Black stylized checkmark/U shape */}
                <g fill="none" stroke="black" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round">
                  {/* Left vertical line */}
                  <path d="M 70 60 L 70 130" />

                  {/* Bottom curve connecting to right diagonal */}
                  <path d="M 70 130 Q 70 155 90 170 Q 120 190 155 165" />

                  {/* Right diagonal line */}
                  <path d="M 155 165 L 155 60" />
                </g>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Transformando o marketing de empresas brasileiras desde 2019.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
              <li><a href="#precos" className="hover:text-white transition">Planos</a></li>
              <li><a href="#entregaveis" className="hover:text-white transition">Entregáveis</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contato@automatize.com</li>
              <li>📱 (11) 98765-4321</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 Automatize. Todos os direitos reservados. |
            <a href="#" className="hover:text-white transition ml-1">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
