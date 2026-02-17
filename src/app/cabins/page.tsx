import { ArrowRight, Bed, Home, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { DEFAULT_ANIMATION_COLOR } from "@/config/animations";
import { cabins } from "@/data/cabins";

export default function CabinsPage() {
  return (
    <section className="py-24 px-4 mt-4">
      <div className="container mx-auto flex flex-col gap-8">
        <Heading level="h2" underline align="center">
          Elige tu Experiencia
        </Heading>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          {cabins.map((cabin) => (
            <SpotlightCard
              key={cabin.id}
              spotlightColor={DEFAULT_ANIMATION_COLOR}
              className="group overflow-hidden border bg-white shadow hover:shadow-lg rounded-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={cabin.mainImage}
                  alt={cabin.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-white/90 text-black border-black/10 backdrop-blur-sm">
                    CABAÑA
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <Heading
                  level="h3"
                  align="left"
                  className="text-2xl font-bold text-black mb-3"
                >
                  {cabin.title}
                </Heading>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {cabin.shortDescription}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{cabin.capacity} personas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{cabin.bedrooms} habitaciones</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span>{cabin.bathrooms} baños</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t px-4 py-4">
                <div className="flex flex-col">
                  <span className="text-xs opacity-70">Desde</span>
                  <span className="text-2xl font-bold">
                    ${cabin.price.toLocaleString("es-CL")}
                    <span className="text-sm font-normal opacity-70">
                      /noche
                    </span>
                  </span>
                </div>
                <Link href={`/cabins/${cabin.slug}`}>
                  <Button size="lg">
                    Ver Más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
