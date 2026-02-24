import type { ToolsSection } from "@/sanity/lib/types";

export default function ToolsSection({ content }: { content?: ToolsSection }) {
  return (
    <section className="bg-secondary text-white flex flex-col items-center w-full">
      <h2 className="text-3xl font-semibold font-heading mb-4 mt-20 text-center max-w-2xl">
        {content?.title || "Tools I Use"}
      </h2>
      <p className="max-w-3xl text-center opacity-70 px-4 whitespace-pre-line mb-20">
        {content?.subtitle || `Familiar with your stack? Even better. \nNew to email automation? I'll guide you through it.`}
      </p>
    </section>
  );
}