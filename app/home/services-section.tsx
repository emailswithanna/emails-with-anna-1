import type { ServicesSection } from "@/sanity/lib/types";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

export default function ServicesSection({ content }: { content?: ServicesSection }) {
  const services = content?.services || [
    {
      icon: "mail-check",
      title: "Email Marketing Program Management",
      description: "I take email off your plate. From campaign setup and audience segmentation to QA and performance tracking, I handle the day-to-day work that keeps your program running smoothly—so you can focus on the bigger picture.",
    },
    {
      icon: "route",
      title: "Lifecycle Strategy & Implementation",
      description: "I design customer journeys that make sense for real people, not just funnels on a slide. From welcome series to retention and win-back, I build programs that guide customers naturally from first touch to long-term loyalty.",
    },
    {
      icon: "newspaper",
      title: "Newsletter Management",
      description: "I help plan, create, and send newsletters people actually want to open and read. That includes content coordination, design, deployment, and ongoing optimization so your newsletter stays consistent, valuable, and on-brand.",
    },
    {
      icon: "monitor-cog",
      title: "Marketing Automation & CRM Optimization",
      description: "Working in tools like HubSpot, Marketo, and MailChimp, I build and improve automations that do the heavy lifting—triggered emails, behavioral segmentation, and workflows that send the right message at the right moment.",
    },
    {
      icon: "chart-no-axes-combined",
      title: "Data Analysis & Optimization",
      description: "I turn email data into clear next steps. Through reporting, A/B testing, and ongoing experiments, I help improve deliverability, engagement, and conversions without guesswork.",
    },
    {
      icon: "shield-check",
      title: "Email Compliance & Deliverability",
      description: "Clean lists, healthy sending practices, accessibility, and compliance matter. I help put the right safeguards in place so your emails actually reach inboxes.",
    }
  ]

  function kebabToPascalCase(str: string): string {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }

  function getIconComponent(iconName: string) {
    const pascalCaseName = kebabToPascalCase(iconName);
    const IconComponent = (LucideIcons as any)[pascalCaseName];

    return IconComponent || LucideIcons.HelpCircle;  // fallback
  }

  return (
    <section id="services" className="flex flex-col items-center w-full px-4 py-20 bg-gradient-to-b from-transparent via-white to-transparent relative">
      {/* Background Image */}
      {/* <Image src="/doodle-bg.png" alt="Background" fill className="object-cover opacity-3 z-0" /> */}

      <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4 text-center max-w-6xl relative z-10">
        <span className="absolute inset-0 bg-primary/50 translate-y-4 -rotate-1 scale-x-105 opacity-50 mt-2 rounded-md" />
        <span className="relative">
          {content?.title || "What Anna Can Do for You"}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-16 max-w-6xl relative z-10">
        {services.map((service, index) => {
          const IconComponent = getIconComponent(service.icon);
          return (
            <div key={index} className="transition-all duration-300 transform group cursor-default">
              <div className="flex items-center mx-auto justify-center mb-6">
                <IconComponent className="text-secondary size-14 stroke-[1.3] group-hover:text-primary transition-all duration-300 p-1" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3 text-center group-hover:text-primary text-secondary transition-colors whitespace-pre-line">
                {service.title}
              </h3>
              <div className="my-4 w-full h-1 bg-gradient-to-r from-secondary/80 to-primary transform scale-x-30 group-hover:scale-x-60 transition-transform duration-300" />
              <p className="leading-relaxed text-center text-secondary group-hover:text-secondary/90 transition-colors duration-300 whitespace-pre-line">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <Link href="#contact" className="w-max btn !px-12 relative z-10">
        {content?.contactButtonText || "Get Started"}
      </Link>
    </section>
  );
}