import type { SummaryCardProps } from "./SummaryCard.types";

import {
  Card,
  Header,
  Subtitle,
  Title,
  List,
  Row,
  Label,
  Value,
  IconWrapper,
  Footer,
} from "./SummaryCard.styles";

export const SummaryCard = ({
  title,
  subtitle,
  icon,
  items,
  linkLabel,
}: SummaryCardProps) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>

        {subtitle && <Subtitle>{subtitle}</Subtitle>}

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

      {linkLabel && (
    <Footer>
      {linkLabel} →
    </Footer>)}
    </Card>
  );
};
