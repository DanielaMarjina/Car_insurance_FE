import type { ReactNode } from "react";

export interface SummaryItem {
  label: string;
  value: string | number;
}

export interface SummaryCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  items: SummaryItem[];
  linkLabel?: string;
}