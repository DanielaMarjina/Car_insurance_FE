import type { ReactNode } from "react";

export interface SummaryItem {
  label: string;
  value: number;
}

export interface SummaryCardProps {
  title: string;
  items: SummaryItem[];
  link?: string;
  icon?: ReactNode;
}