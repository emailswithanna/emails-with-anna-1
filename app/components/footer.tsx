import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex flex-col md:flex-row items-center gap-4 mx-auto md:mx-0 mb-3 w-max">
              <Image src="/white-logo.svg" alt="Emails with Anna Logo" width={40} height={40} />
              <span className="font-semibold font-heading text-lg">Emails with Anna</span>
            </Link>
            <p className="opacity-70 text-sm mx-auto md:mx-0 max-w-xs text-center md:text-left">
              Thoughtful email marketing, built for real humans
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-1">
            <Link href="#services" className="block mx-auto md:mx-0 hover:opacity-70 transition-opacity duration-300 text-sm w-max">Services</Link>
            <Link href="#about" className="block mx-auto md:mx-0 hover:opacity-70 transition-opacity duration-300 text-sm w-max">About</Link>
            <Link href="#contact" className="block mx-auto md:mx-0 hover:opacity-70 transition-opacity duration-300 text-sm w-max">Contact</Link>
          </div>


          {/* Contact Info */}
          <div className="space-y-1 text-sm text-gray-300 mx-auto md:mx-0 text-center md:text-left">
            <Link href="mailto:anna@emailswithanna.com" className="flex items-center space-x-2 w-max">
              <Mail className="h-4 w-4" />
              <span>anna@emailswithanna.com</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 text-center opacity-70">
          <p className="text-sm">
            © {new Date().getFullYear()} Emails with Anna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
