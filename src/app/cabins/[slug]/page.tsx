import {
  Bed,
  Beef,
  Car,
  Check,
  Droplets,
  Flame,
  Layout,
  MapPin,
  Maximize,
  Moon,
  Mountain,
  Sun,
  TreeDeciduous,
  Users,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as React from "react";

import { Masonry } from "@/components/animations/masonry";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DEFAULT_ANIMATION_COLOR } from "@/config/animations";
import { cabins } from "@/data/cabins";

interface CabinDetailPageProps {
  params: Promise<{ slug: string }>;
}

const iconMap = {
  flame: Flame,
  utensils: Utensils,
  car: Car,
  wifi: Wifi,
  waves: Waves,
  beef: Beef,
  tree: TreeDeciduous,
  layout: Layout,
  mountain: Mountain,
  sun: Sun,
  sofa: Moon,
} as const;

const CABIN_INFO = [
  {
    icon: Users,
    getValue: (c: (typeof cabins)[0]) => `${c.capacity} Personas`,
  },
  {
    icon: Bed,
    getValue: (c: (typeof cabins)[0]) => `${c.bedrooms} Habitaciones`,
  },
  {
    icon: Droplets,
    getValue: (c: (typeof cabins)[0]) => `${c.bathrooms} Baños`,
  },
  { icon: Maximize, getValue: (c: (typeof cabins)[0]) => `${c.sqm} M²` },
  { icon: MapPin, getValue: () => "Malalcahuello" },
] as const;

const LOCATION_ITEMS = [
  "Cerca de centros de esquí Corralco (15 min)",
  "Acceso directo a senderos del parque nativo",
  "Entorno virgen rodeado de araucarias milenarias",
] as const;

const COMMON_SERVICES = [
  "Servicio de bienestar y confort del espacio común 1",
  "Servicio de bienestar y confort del espacio común 2",
  "Servicio de bienestar y confort del espacio común 3",
  "Servicio de bienestar y confort del espacio común 4",
  "Servicio de bienestar y confort del espacio común 5",
  "Servicio de bienestar y confort del espacio común 6",
] as const;

export async function generateStaticParams() {
  return cabins.map((cabin) => ({ slug: cabin.slug }));
}

export default async function CabinDetailPage({ params }: CabinDetailPageProps) {
  const { slug } = await params;
  const cabin = cabins.find((c) => c.slug === slug);

  if (!cabin) {
    notFound();
  }

  const IconComponent = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon || Check;
  };

  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      <header className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/60 z-10" />
        <Image fill priority src={cabin.mainImage} alt={cabin.title} className="object-cover" />

        <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col gap-8">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-white/50" />
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em]">
              Cabaña
            </Badge>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-white/50" />
          </div>

          <Heading level="h1" align="center">
            {cabin.name}
          </Heading>

          <p className="text-lg tracking-wide max-w-xl mx-auto opacity-90 drop-shadow-lg">
            {cabin.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 bg-white/5 backdrop-blur-2xl border-t border-white/10 hidden md:block">
          <nav className="container mx-auto px-6 py-8 flex justify-around items-center text-[10px] font-black tracking-[0.2em] uppercase">
            {CABIN_INFO.map(({ icon: Icon, getValue }) => (
              <React.Fragment key={getValue(cabin)}>
                <div className="flex items-center gap-3 group transition-all">
                  <Icon className="h-5 w-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="opacity-80 group-hover:opacity-100">{getValue(cabin)}</span>
                </div>
                <div className="h-4 w-px bg-white/10" />
              </React.Fragment>
            ))}
          </nav>
        </div>
      </header>

      <section className="py-32 container mx-auto px-4 flex flex-col gap-10">
        <Heading level="h2" underline align="center">
          Fotografías de {cabin.name}
        </Heading>

        <ScrollArea className="h-[900px] md:h-[700px] w-full rounded-md border-none">
          <Masonry
            items={cabin.gallery.map((img, idx) => ({
              id: idx.toString(),
              img,
              url: img,
              height: [600, 800, 700, 900, 600, 1000][idx % 4],
            }))}
          />
        </ScrollArea>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 xl:px-0 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {cabin.features.map((f) => {
            const Icon = IconComponent(f.icon);

            return (
              <SpotlightCard
                key={f.icon}
                spotlightColor={DEFAULT_ANIMATION_COLOR}
                className="border shadow hover:shadow-lg rounded-2xl p-10 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <Icon className="h-8 w-8" />
                  </div>

                  <Heading level="h4" align="center">
                    {f.title}
                  </Heading>

                  <p className="text-sm text-black/40 font-medium italic leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 xl:px-0 max-w-5xl flex flex-col gap-8">
        <Heading level="h2" underline align="center">
          Normas de la casa
        </Heading>

        <SpotlightCard
          className="border overflow-hidden shadow hover:shadow-lg rounded-2xl p-0"
          spotlightColor={DEFAULT_ANIMATION_COLOR}
        >
          {cabin.rules.map((rule) => (
            <article
              key={rule.item}
              className="grid grid-cols-1 md:grid-cols-3 p-8 border-b last:border-0 hover:bg-zinc-50 transition-colors"
            >
              <div className="text-[11px] font-black uppercase tracking-[0.3em] mb-3 md:mb-0 text-black/80">
                {rule.item}
              </div>
              <div className="col-span-2 text-sm font-medium opacity-50 leading-relaxed">
                {rule.detail}
              </div>
            </article>
          ))}
        </SpotlightCard>
      </section>

      <section
        id="ubi"
        className="relative h-[700px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: 'url("/nature/nature-8.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <SpotlightCard
            className="max-w-2xl bg-white/90 backdrop-blur-xl p-12 rounded-4xl border border-black/5 shadow-2xl transition-all duration-500"
            spotlightColor="rgba(16, 185, 129, 0.2)"
          >
            <Heading level="h2" align="center">
              Ubicación privilegiada
            </Heading>
            <ul className="space-y-8 text-xs font-bold uppercase tracking-[0.25em] text-black/60 mt-8">
              {LOCATION_ITEMS.map((text, idx) => (
                <li key={text} className="flex items-center gap-8 group">
                  <div className="h-12 w-12 border border-black/10 rounded-full flex items-center justify-center bg-black/5 font-black text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                    {idx + 1}
                  </div>
                  <span className="group-hover:text-black transition-colors">{text}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="mt-14 w-full md:w-auto rounded-full bg-black text-white hover:bg-zinc-800 px-12 h-16 text-[10px] font-black tracking-widest uppercase transition-all hover:scale-105 shadow-xl shadow-black/10"
            >
              VER EN GOOGLE MAPS
            </Button>
          </SpotlightCard>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 flex flex-col gap-8">
        <Heading level="h2" underline align="center">
          Conexión Natural
        </Heading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <article
              key={n}
              className="aspect-square relative overflow-hidden rounded-2xl border p-0 group"
            >
              <Image
                src={`/nature/nature-${n}.jpg`}
                fill
                alt={`nat${n}`}
                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
              />
            </article>
          ))}

          <SpotlightCard
            spotlightColor="rgba(255,255,255,0.15)"
            className="hidden md:flex aspect-square relative overflow-hidden rounded-2xl bg-black flex-col gap-4 items-center justify-center text-white text-center p-12"
          >
            <Heading level="h3" align="center" className="text-white">
              Un lugar mejor
            </Heading>

            <p className="text-sm opacity-50 leading-loose">
              Cada rincón de nuestra propiedad está diseñado para que vivas una experiencia
              auténtica de montaña, integrando el lujo del descanso con la crudeza de la naturaleza
              patagónica.
            </p>

            <Button
              size="sm"
              className="bg-white text-black rounded-full hover:bg-zinc-200 px-8 h-10 text-[10px] font-black tracking-widest uppercase transition-transform hover:scale-105"
            >
              Saber más
            </Button>
          </SpotlightCard>
        </div>
      </section>

      <section id="espacios" className="bg-zinc-950 py-40 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
          <Heading level="h1" align="center" className="text-white">
            Espacios comunes
          </Heading>
          <p className="text-xs uppercase tracking-[0.6em] font-bold text-white/40 mb-20 italic">
            El espíritu de la montaña
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {[
              {
                src: "/gym/gym-1.jpg",
                alt: "gym1",
                label: "Gimnasio Funcional",
              },
              { src: "/gym/gym-2.jpg", alt: "gym2", label: "Chill Zone & Spa" },
            ].map(({ src, alt, label }) => (
              <SpotlightCard
                key={alt}
                className="relative aspect-video overflow-hidden rounded-4xl border-white/10 p-0 group"
              >
                <Image
                  src={src}
                  fill
                  alt={alt}
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 text-white text-[10px] font-black uppercase tracking-[0.3em] bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full">
                  {label}
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {COMMON_SERVICES.map((text, idx) => (
              <article
                key={text}
                className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 border-b border-white/5 pb-6 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 bg-white/5 text-white flex items-center justify-center rounded-2xl border border-white/10 shrink-0 group-hover:bg-white group-hover:text-black transition-all font-black italic">
                  0{idx + 1}
                </div>
                <span className="leading-relaxed">{text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
