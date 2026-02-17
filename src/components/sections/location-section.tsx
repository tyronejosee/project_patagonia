import { GOOGLE_MAPS_EMBED_URL } from "@/data/location";

export function LocationSection() {
  return (
    <section id="location" className="w-full h-[400px] md:h-[500px] overflow-hidden">
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ filter: "invert(1) brightness(1) grayscale(100%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Cabañas Parque del Lago"
        className="border-none"
      />
    </section>
  );
}
