import { GOOGLE_MAPS_EMBED_URL } from "@/data/location";

export function LocationSection() {
  return (
    <section id="location" className="w-full h-[400px] md:h-[500px]">
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Cabañas Parque del Lago"
        className="w-full h-full grayscale-0 hover:grayscale-0 transition-all duration-300"
      />
    </section>
  );
}
