import { ElementType } from "react";

export interface AppItem {
  id: string;
  nama: string;
  deskripsi: string;
  link: string;
  icon?: string;          // Original raw string (e.g. icon URL or icon class)
  IconComponent: ElementType; // Lucide React Component
  bgIcon?: string;
  warnaIcon?: string;
  status?: string | null;
}
