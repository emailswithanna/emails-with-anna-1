import type { ExperienceSection } from "@/sanity/lib/types";
import Link from "next/link";

export default function ExperienceSection({ content }: { content?: ExperienceSection }) {
  return (
    <section className="bg-white flex flex-col items-center w-full my-20 px-4">
      <h2 className="text-4xl font-semibold font-heading mb-8 text-center max-w-2xl">
        {content?.title || "Experience"}
      </h2>
      <div className="max-w-3xl flex flex-row flex-wrap gap-8 justify-center">
        {content?.experiences.map((e, index) => (
          <div key={index} className="max-w-3xl text-center">
            <Link href={e.link || "#"} className="text-2xl underline hover:text-primary transition-colors duration-300">{e.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}