import type { ReactNode } from "react";

export interface StatisticCardProps {
    title: string;
    value: number | string;
    icon: ReactNode;
    linkLabel?: string;
}