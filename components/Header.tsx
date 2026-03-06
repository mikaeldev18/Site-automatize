export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-16 h-16" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Black background square with rounded corners */}
            <rect x="14" y="14" width="172" height="172" rx="28" fill="black" />

            {/* White checkmark/U shape - left vertical stroke */}
            <g fill="none" stroke="white" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
              {/* Left vertical line */}
              <path d="M 60 50 L 60 120" />

              {/* Curved bottom - connects vertical to diagonal */}
              <path d="M 60 120 Q 60 140 75 150 Q 100 165 125 145" />

              {/* Right diagonal line going up */}
              <path d="M 125 145 L 125 50" />
            </g>
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
