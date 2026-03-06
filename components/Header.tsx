import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between">
        <div className="flex items-center hover:scale-110 transition-transform duration-300">
          <Image
            src="/logo.webp"
            alt="Automatize Logo"
            width={180}
            height={180}
            className="h-32 w-auto"
            priority
          />
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="text-gray-700 hover:text-black transition">Serviços</a>
          <a href="#entregaveis" className="text-gray-700 hover:text-black transition">Entregáveis</a>
        </nav>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Contato
        </button>
      </div>
    </header>
  );
}
