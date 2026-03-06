export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-12 h-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Black shape */}
            <rect x="40" y="40" width="50" height="50" rx="10" fill="black" />
            <path d="M 90 40 Q 120 40 120 70 Q 120 100 90 100 L 90 60 Q 100 60 100 70 Q 100 80 90 90 Z" fill="black" />
            {/* White shape */}
            <rect x="70" y="70" width="35" height="35" rx="8" fill="white" />
          </svg>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="text-gray-700 hover:text-black transition">Serviços</a>
          <a href="#precos" className="text-gray-700 hover:text-black transition">Planos</a>
          <a href="#entregaveis" className="text-gray-700 hover:text-black transition">Entregáveis</a>
        </nav>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Contato
        </button>
      </div>
    </header>
  );
}
