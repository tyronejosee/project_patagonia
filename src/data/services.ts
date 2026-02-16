import {
  Car,
  Coffee,
  Flame,
  Gamepad2,
  Info,
  Lock,
  Mountain,
  ShieldCheck,
  Tv,
  Users,
  Wifi,
} from "lucide-react";

import type { Service } from "@/types/service";

export const services: Service[] = [
  { icon: Coffee, label: "Desayunos" },
  { icon: Wifi, label: "WiFi" },
  { icon: Tv, label: "TV Cable" },
  { icon: Car, label: "Estacionamiento Privado" },
  { icon: Coffee, label: "Cafetería" },
  { icon: Flame, label: "Calefacción central" },
  { icon: Lock, label: "Caja de Seguridad" },
  { icon: Gamepad2, label: "Juegos para Niños" },
  { icon: Car, label: "Transfer" },
  { icon: Lock, label: "Portón Eléctrico" },
  { icon: Users, label: "Mucama y Lavandería" },
  { icon: Flame, label: "Parrilla para Asados" },
  { icon: Info, label: "Información Turística" },
  { icon: Mountain, label: "Áreas Verdes" },
  { icon: ShieldCheck, label: "NO se admiten mascotas", unavailable: true },
];
