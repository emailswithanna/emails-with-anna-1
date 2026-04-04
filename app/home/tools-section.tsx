import { urlFor } from "@/sanity/lib/image";
import type { ToolsSection } from "@/sanity/lib/types";
import Image from "next/image";

export default function ToolsSection({ content }: { content?: ToolsSection }) {
  return (
    <section className="text-secondary flex flex-col items-center w-full px-4">
      <h2 className="text-4xl md:text-5xl font-heading mb-4 mt-20 text-center max-w-2xl">
        {content?.title || "Tools I Use"}
      </h2>

      {content?.tools && content.tools.length > 0 && (
        <div className="flex flex-wrap justify-center my-12 gap-8 items-center ">
          {content.tools.map((tool, index) => (
            <Image key={index} className="w-32 md:w-48 h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
              src={tool?.asset ? urlFor(tool).url() : "/white-logo.svg"}
              alt={tool?.alt || "Emails with Anna Tool"}
              width={300} height={300} />
          ))}
        </div>
      )}

      <p className="max-w-3xl text-center opacity-70 px-4 whitespace-pre-line mb-20">
        {content?.subtitle || `Familiar with your stack? Even better. \nNew to email automation? I'll guide you through it.`}
      </p>
    </section>
  );
}