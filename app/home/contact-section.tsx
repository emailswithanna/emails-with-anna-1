import type { ContactSection } from "@/sanity/lib/types";
import ContactForm from './contact-form';
import Image from "next/image";

export default function ContactSection({ content }: { content?: ContactSection }) {
  return (
    <section id="contact" className="bg-secondary/90 text-white flex flex-col items-center w-full py-20 px-4 relative">
      {/* Background Image */}
      <Image src="/doodle-bg.png" alt="Background" fill className="object-cover opacity-3 z-0" />

      <h2 className="text-4xl md:text-5xl font-heading mb-4 text-center max-w-2xl">
        {content?.title || "Let's Work Together"}
      </h2>
      <p className="max-w-3xl text-center text-sm md:text-base text-gray-200 mb-8 whitespace-pre-line">
        {content?.subtitle || "Ready to build an email program that drives real results? \nLet's talk about what you need and how I can help."}
      </p>

      <ContactForm submitButtonText={content?.submitButtonText} />

    </section>
  );
}