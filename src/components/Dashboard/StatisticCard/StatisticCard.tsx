import type { StatisticCardProps } from "./StatisticCard.types";

export const StatisticCard = ({
  title,
  value,
  icon,
  link,
}: StatisticCardProps) => {
  return (
    <div>
      {icon}

      <h3>{title}</h3>

      <h2>{value}</h2>

      {link && <a href={link}>View</a>}
    </div>
  );
};