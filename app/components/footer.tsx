import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-3">
              <Image src="/white-logo.svg" alt="Emails with Anna Logo" width={40} height={40} />
              <span className="font-bold text-lg">Emails with Anna</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional email marketing services for businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="space-y-1">
              <Link href="/" className="block hover:text-white text-sm">Home</Link>
              <Link href="#services" className="block hover:text-white text-sm">Services</Link>
              <Link href="#about" className="block hover:text-white text-sm">About</Link>
              <Link href="#contact" className="block hover:text-white text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>anna@emailswithanna.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-6 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Emails with Anna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
