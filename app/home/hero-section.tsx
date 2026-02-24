import Image from 'next/image';
import Link from 'next/link';
import type { HeroSection } from "@/sanity/lib/types";

export default function HeroSection({ content }: { content?: HeroSection }) {
  return (
    <section className="flex flex-col items-center bg-primary w-full text-white py-20 px-4 relative">
      {/* Background Image */}
      <Image src="/doodle-bg.png" alt="Background" fill className="object-cover opacity-2 z-0" />

      <div className='max-w-6xl flex flex-col items-center md:items-start w-full relative z-10'>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 w-full justify-between">

          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 mt-12 md:mt-0 w-full whitespace-pre-line">
              {content?.tagline || 'Thoughtful email marketing, \nbuilt for real humans'}
            </h1>
            <div className="w-20 h-1 bg-secondary mb-6" />
            <p className="font-sans text-lg md:text-xl max-w-2xl whitespace-pre-line">
              {content?.description || 'Helping brands build intentional email and lifecycle programs that drive engagement and growth.'}
            </p>
          </div>

          <Image src="/white-logo.svg" className='md:mr-12'
            alt="Emails with Anna Logo" width={200} height={200} />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Link href="#contact" className='btn'>
            {content?.contactButtonText || "Let's Talk"}
          </Link>
          <Link href="#services" className='btn-white'>
            {content?.servicesButtonText || "My Services"}
          </Link>
        </div>
      </div>

    </section>
  );
}