import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export function CTASection({
  title = "¿Listo para tu próxima aventura?",
  description = "Reserva ahora y asegura tu lugar en el paraíso",
  buttonText = "Reservar Ahora",
  className = "",
}: CTASectionProps) {
  return (
    <section className={cn("py-24 px-4", className)}>
      <div className="container mx-auto max-w-7xl flex flex-col gap-8">
        <Heading level="h2" underline align="center">
          {title}
        </Heading>

        <p className="text-lg opacity-70 text-center">{description}</p>

        <div className="flex justify-center">
          <WhatsAppButton size="xl" variant="section" buttonText={buttonText} />
        </div>
      </div>
    </section>
  );
}
