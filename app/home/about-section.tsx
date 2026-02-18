export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary text-white flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold font-heading mb-4 mt-20 text-center max-w-2xl">
        About Me
      </h2>
      <p className="max-w-3xl text-center text-gray-300 px-4 whitespace-pre-line mb-20">
        {`
          Hi, I'm Anna. I'm a lifecycle and email marketing strategist helping businesses make their email programs feel useful to their audiences and meaningful for growth.

          I've worked across industries—from nonprofits to startups to large tech companies—building lifecycle programs from the ground up, cleaning up messy automations, and helping teams send functional and engaging emails. I'm just as comfortable shaping the strategy as I am inside the platform doing the actual build.

          Whether you need someone to run your day-to-day email marketing, design a smarter lifecycle program, or optimize what's already in place, I help make email simpler, more thoughtful, and more effective.
        `}
      </p>
    </section>
  );
}