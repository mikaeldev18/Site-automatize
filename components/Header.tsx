export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg
            className="w-16 h-16"
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Automatize Logo"
          >
            {/* Black rounded square background */}
            <rect x="20" y="20" width="200" height="200" rx="35" fill="black" />

            {/* White stylized checkmark/U shape */}
            <g fill="none" stroke="white" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round">
              {/* Left vertical line */}
              <path d="M 70 60 L 70 130" />

              {/* Bottom curve connecting to right diagonal */}
              <path d="M 70 130 Q 70 155 90 170 Q 120 190 155 165" />

              {/* Right diagonal line */}
              <path d="M 155 165 L 155 60" />
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
