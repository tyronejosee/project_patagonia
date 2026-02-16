import SpotlightCard from "@/components/animations/spotlight-card";
import { Heading } from "@/components/ui/heading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <Heading id="services-heading" level="h2" underline align="center" className="mb-12">
          Contamos con
        </Heading>

        <SpotlightCard
          className="max-w-4xl mx-auto border bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          spotlightColor="rgba(34, 197, 94, 0.25)"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {services.map((service) => (
              <li
                key={service.label}
                className="flex items-center gap-3"
                aria-label={`${service.label} ${service.unavailable ? "(No disponible)" : ""}`}
              >
                <div
                  className={`shrink-0 rounded-full p-2.5 ${
                    service.unavailable ? "bg-red-500/10" : "bg-black/5"
                  }`}
                  aria-hidden="true"
                >
                  <service.icon
                    className={`h-5 w-5 ${service.unavailable ? "text-red-500" : "text-black"}`}
                  />
                </div>
                <span
                  className={`text-sm font-medium leading-none ${
                    service.unavailable ? "text-red-500 line-through opacity-70" : "text-black"
                  }`}
                >
                  {service.label}
                </span>
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </div>
    </section>
  );
}
