import type { SummaryCardProps } from "./SummaryCard.types";

import {
  Card,
  Header,
  Title,
  List,
  Row,
  Label,
  Value,
  IconWrapper,
} from "./SummaryCard.styles";

export const SummaryCard = ({
  title,
  icon,
  items,
}: SummaryCardProps) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>

        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Header>

      <List>
        {items.map((item) => (
          <Row key={item.label}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </Row>
        ))}
      </List>
    </Card>
  );
};