"use client";

import { Bed, Home, Users } from "lucide-react";
import Link from "next/link";

import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { DEFAULT_ANIMATION_COLOR } from "@/config/animations";
import { type Cabin, cabins } from "@/data/cabins";

interface ParallaxBannerProps {
  cabin: Cabin;
}

function ParallaxBanner({ cabin }: ParallaxBannerProps) {
  return (
    <article
      className="relative h-[600px] md:h-[700px] flex justify-center items-center bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url("${cabin.mainImage}")` }}
      aria-label={`Cabaña ${cabin.title}`}
    >
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <SpotlightCard
        className="relative z-20 w-full max-w-3xl mx-4 bg-white/80 backdrop-blur-lg border rounded-2xl p-4 shadow hover:shadow-lg transition-all duration-300"
        spotlightColor={DEFAULT_ANIMATION_COLOR}
      >
        <Heading level="h3" align="left" className="mb-4">
          {cabin.title}
        </Heading>

        <p className="mb-6 max-w-2xl leading-relaxed font-light text-gray-800">
          {cabin.shortDescription}
        </p>

        <dl className="flex flex-wrap items-center gap-6 border-y border-black/10 py-4 mb-6">
          <div className="flex items-center gap-3">
            <dt className="sr-only">Capacidad</dt>
            <Users className="w-5 h-5 text-black" aria-hidden="true" />
            <dd className="font-semibold text-black">
              {cabin.capacity} <span className="text-gray-600 font-normal">Huéspedes</span>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Dormitorios</dt>
            <Bed className="w-5 h-5 text-black" aria-hidden="true" />
            <dd className="font-semibold text-black">
              {cabin.bedrooms} <span className="text-gray-600 font-normal">Dormitorios</span>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Baños</dt>
            <Home className="w-5 h-5 text-black" aria-hidden="true" />
            <dd className="font-semibold text-black">
              {cabin.bathrooms} <span className="text-gray-600 font-normal">Baños</span>
            </dd>
          </div>
        </dl>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
              Tarifa por noche
            </span>
            <p className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-black">
                ${cabin.price.toLocaleString("es-CL")}
              </span>
              <abbr title="Pesos Chilenos" className="text-gray-600 font-medium no-underline">
                CLP
              </abbr>
            </p>
          </div>

          <Button asChild size="lg">
            <Link href={`/cabins/${cabin.slug}`}>Explorar Cabaña</Link>
          </Button>
        </footer>
      </SpotlightCard>
    </article>
  );
}

export function ParallaxSection() {
  return (
    <section id="cabins" className="flex flex-col" aria-labelledby="cabins-title">
      <span id="cabins-title" className="sr-only">
        Nuestras Cabañas
      </span>
      {cabins.map((cabin) => (
        <ParallaxBanner key={cabin.id} cabin={cabin} />
      ))}
    </section>
  );
}
