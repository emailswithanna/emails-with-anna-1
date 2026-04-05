import { config } from "@/config";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import type { AboutSection } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function AboutSection({ content }: { content?: AboutSection }) {
  const linkedInUrl = (await sanityFetch({ query: '*[_type == "siteSettings"][0].linkedInUrl', params: {} }))
    ?.data as string | null || config.linkedInUrl;

  return (
    <section id="about" className="bg-secondary text-white flex flex-col items-center w-full py-20 px-4 relative">
      {/* Background Image */}
      <Image src="/doodle-bg.png" alt="Background" fill className="object-cover opacity-3 z-0" />

      <div className="flex flex-col md:flex-row text-center md:text-left items-center z-10">
        <Image src={content?.image?.asset ? urlFor(content.image).url() : "/white-logo.svg"}
          alt={content?.image?.alt || "Emails with Anna"}
          width={300} height={300}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto my-6 md:mb-0 md:mr-12" />

        <div className="max-w-3xl px-4 whitespace-pre-line">
          <h2 className="text-4xl md:text-5xl font-heading mb-12 max-w-2xl">
            {content?.title || "About Me"}
          </h2>

          <p>
            {content?.text || `
              Hi, I'm Anna. I'm a lifecycle and email marketing strategist helping businesses make their email programs feel useful to their audiences and meaningful for growth.

              I've worked across industries—from nonprofits to startups to large tech companies—building lifecycle programs from the ground up, cleaning up messy automations, and helping teams send functional and engaging emails. I'm just as comfortable shaping the strategy as I am inside the platform doing the actual build.

              Whether you need someone to run your day-to-day email marketing, design a smarter lifecycle program, or optimize what's already in place, I help make email simpler, more thoughtful, and more effective.
            `}
          </p>

          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="btn-white block mt-10 mx-auto md:mx-0 w-max">
            Connect on LinkedIn
          </Link>
        </div>

      </div>
    </section>
  );
}