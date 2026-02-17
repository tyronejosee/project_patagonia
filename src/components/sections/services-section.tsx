import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Heading } from "@/components/ui/heading";
import { DEFAULT_ANIMATION_COLOR } from "@/config/animations";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 flex flex-col gap-8">
        <Heading id="services-heading" level="h2" underline align="center">
          Contamos con
        </Heading>

        <SpotlightCard
          className="w-full max-w-5xl mx-auto border bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all duration-300"
          spotlightColor={DEFAULT_ANIMATION_COLOR}
        >
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {services.map((service) => (
              <li
                key={service.label}
                className="flex items-center gap-3"
                aria-label={`${service.label} ${service.unavailable ? "(No disponible)" : ""}`}
              >
                <div
                  className={cn(
                    "shrink-0 rounded-full p-2.5",
                    service.unavailable ? "bg-red-500/10" : "bg-black/5",
                  )}
                  aria-hidden="true"
                >
                  <service.icon
                    className={cn("h-5 w-5", service.unavailable ? "text-red-500" : "text-black")}
                  />
                </div>
                <span
                  className={cn(
                    "text-sm font-medium leading-none",
                    service.unavailable ? "text-red-500 line-through opacity-70" : "text-black",
                  )}
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
