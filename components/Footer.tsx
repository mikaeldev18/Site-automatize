import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.webp"
                alt="Automatize Logo"
                width={70}
                height={70}
                className="h-14 w-auto"
              />
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
