import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/black-logo.svg" alt="Emails with Anna Logo" width={32} height={32} />
              <span className="font-semibold text-xl">Emails with Anna</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex font-medium gap-8">
            <Link href="#services" className="px-3 py-2 rounded-md transition-colors">
              Services
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md transition-colors">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md transition-colors">
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}