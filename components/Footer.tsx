export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* White shape for dark background */}
                <rect x="40" y="40" width="50" height="50" rx="10" fill="white" />
                <path d="M 90 40 Q 120 40 120 70 Q 120 100 90 100 L 90 60 Q 100 60 100 70 Q 100 80 90 90 Z" fill="white" />
                {/* Black shape */}
                <rect x="70" y="70" width="35" height="35" rx="8" fill="black" />
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
