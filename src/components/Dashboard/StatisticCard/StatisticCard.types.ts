import type { ReactNode } from "react";

export interface StatisticCardProps {
  title: string;
  value: number | string;
  link?: string;
  icon?:ReactNode
}