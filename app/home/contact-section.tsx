"use client";
import { useState } from 'react';
import type { ContactSection } from "@/sanity/lib/types";

export default function ContactSection({ content }: { content?: ContactSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-primary text-white flex flex-col items-center w-full py-20 px-4">
      <h2 className="text-3xl font-heading font-semibold mb-4 text-center max-w-2xl">
        {content?.title || "Let's Work Together"}
      </h2>
      <p className="max-w-3xl text-center text-sm md:text-base text-gray-200 mb-8 whitespace-pre-line">
        {content?.subtitle || "Ready to build an email program that drives real results? \nLet's talk about what you need and how I can help."}
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md text-black bg-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md text-black bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-md text-black bg-white resize-none"
          required
        />
        <button type="submit" className="!w-full btn-white">
          {content?.submitButtonText || "Get in Touch"}
        </button>
      </form>
    </section>
  );
}