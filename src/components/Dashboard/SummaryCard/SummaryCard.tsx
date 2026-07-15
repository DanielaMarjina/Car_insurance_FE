import type { SummaryCardProps } from "./SummaryCard.types";
import { Link } from "react-router-dom";

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
  TextContainer
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
        <TextContainer>
          <Title>{title}</Title>

          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TextContainer>

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
        <Footer as={Link} to={title === "Cars by Category" ? "/cars" : "/"}>
          {linkLabel} →
        </Footer>
      )}
    </Card>
  );
};
