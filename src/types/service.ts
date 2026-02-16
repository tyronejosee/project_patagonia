import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  label: string;
  unavailable?: boolean;
}
