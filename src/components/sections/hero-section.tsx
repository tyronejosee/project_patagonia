import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/showcase.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/20 to-black/60" />

      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-30 mx-auto px-4 lg:px-6 text-center text-white">
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-white/50" />
          <Badge
            variant="secondary"
            className="text-xs uppercase tracking-widest bg-white/10 text-white border border-white/20 backdrop-blur-md"
          >
            Bienvenido al paraíso
          </Badge>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-white/50" />
        </div>
        <Heading level="h1" className="mb-6 text-white drop-shadow-2xl">
          The Cabins
        </Heading>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-200 sm:text-2xl drop-shadow-lg leading-relaxed">
          Rodeadas de volcanes, parques nacionales y termas, ofrecemos un servicio de primer nivel,
          ideal para desconectar y disfrutar todo el año.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-10 text-lg font-semibold bg-white text-black hover:bg-gray-100 border-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            <Link href="/cabins">Explorar Cabañas</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full px-10 text-lg font-semibold bg-white/10 hover:bg-white/25 text-white border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://app.cloudpano.com/tours/ryryRvL0l?sceneId=P4NWJ7Hmod-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Tour Virtual
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Desliza</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
