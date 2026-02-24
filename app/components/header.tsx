"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith('/studio')) { return null; }

  return (
    <header className="shadow-md z-50">
      <div className="mx-auto">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <Image src="/black-logo.svg" alt="Emails with Anna Logo" width={40} height={40} />
              <span className="font-semibold font-heading text-lg group-hover:text-primary transition-colors duration-300">
                Emails with Anna
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex font-medium gap-8">
            <Link href="#services" className="px-3 py-2 rounded-md hover:underline transition-colors">
              Services
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:underline transition-colors">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:underline transition-colors">
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}