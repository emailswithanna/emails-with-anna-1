import type { ExperienceSection } from "@/sanity/lib/types";
import Link from "next/link";

export default function ExperienceSection({ content }: { content?: ExperienceSection }) {
  return (
    <section className="bg-primary text-white flex flex-col items-center w-full py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-heading mb-6 text-center max-w-2xl">
        {content?.title || "Experience"}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-secondary to-secondary/50 mb-12" />
      <div className="max-w-3xl flex flex-row flex-wrap gap-8 justify-center">
        {content?.experiences.map((e, index) => (
          <div key={index} className="max-w-3xl text-center">
            <Link href={e.link || "#"} className="text-2xl underline hover:opacity-70 transition-opacity duration-300">{e.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}