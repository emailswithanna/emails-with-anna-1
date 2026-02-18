import { MailCheck, Route, Newspaper, MonitorCog, ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: MailCheck,
      title: "Email Marketing Program Management",
      description: "I take email off your plate. From campaign setup and audience segmentation to QA and performance tracking, I handle the day-to-day work that keeps your program running smoothly—so you can focus on the bigger picture.",
    },
    {
      icon: Route,
      title: "Lifecycle Strategy & Implementation",
      description: "I design customer journeys that make sense for real people, not just funnels on a slide. From welcome series to retention and win-back, I build programs that guide customers naturally from first touch to long-term loyalty.",
    },
    {
      icon: Newspaper,
      title: "Newsletter Management",
      description: "I help plan, create, and send newsletters people actually want to open and read. That includes content coordination, design, deployment, and ongoing optimization so your newsletter stays consistent, valuable, and on-brand.",
    },
    {
      icon: MonitorCog,
      title: "Marketing Automation & CRM Optimization",
      description: "Working in tools like HubSpot, Marketo, and MailChimp, I build and improve automations that do the heavy lifting—triggered emails, behavioral segmentation, and workflows that send the right message at the right moment.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Data Analysis & Optimization",
      description: "I turn email data into clear next steps. Through reporting, A/B testing, and ongoing experiments, I help improve deliverability, engagement, and conversions without guesswork.",
    },
    {
      icon: ShieldCheck,
      title: "Email Compliance & Deliverability",
      description: "Clean lists, healthy sending practices, accessibility, and compliance matter. I help put the right safeguards in place so your emails actually reach inboxes.",
    }
  ]
  return (
    <section id="services" className="flex flex-col items-center w-full px-4 py-20 bg-gradient-to-b from-transparent via-white to-transparent">
      
      <h2 className="text-4xl md:text-5xl font-heading mb-4 text-center max-w-6xl relative">
        {/* <span className="absolute inset-0 bg-yellow-500 -rotate-1 scale-x-105 opacity-50 mt-2 rounded-md"></span> */}
        <span className="relative">What Anna Can Do for You</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-16 max-w-6xl">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="transition-all duration-300 transform group">
              <div className="flex items-center mx-auto justify-center mb-6">
                <IconComponent className="text-primary size-14 stroke-[1.3] transition-all duration-300 p-1" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3 text-center text-secondary transition-colors">
                {service.title}
              </h3>
              <div className="my-4 w-full h-1 bg-gradient-to-r from-secondary/80 to-primary transform scale-x-30 group-hover:scale-x-100 transition-transform duration-300" />
              <p className="leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
      <Link href="#contact" className="w-max btn !px-12">
        Get Started
      </Link>
    </section>
  );
}