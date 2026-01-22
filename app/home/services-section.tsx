import { MailCheck, Route, Newspaper, MonitorCog, ChartNoAxesCombined, ShieldCheck } from "lucide-react";

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
    <section className="flex flex-col items-center bg-white w-full">
      <h2 className="text-3xl font-bold mb-4 mt-20 text-center max-w-2xl">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-6xl">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="bg-secondary text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}