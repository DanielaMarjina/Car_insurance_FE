import type { SummaryCardProps } from "./SummaryCard.types";

export const SummaryCard = ({
  title,
  icon,
  items,
  link,
}: SummaryCardProps) => {
  return (
    <div>
      {icon}

      <h3>{title}</h3>

      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>

          <span>{item.value}</span>
        </div>
      ))}

      {link && <a href={link}>View</a>}
    </div>
  );
};