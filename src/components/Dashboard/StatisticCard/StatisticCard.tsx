import type { StatisticCardProps } from "./StatisticCard.types";

import {
  Card,
  Header,
  IconContainer,
  Title,
  Value,
  Text,
  Footer,
} from "./StatisticCard.styles";

export const StatisticCard = ({ title, value, icon, linkLabel }: StatisticCardProps) => {
  return (
    <Card>
      <Header>
        <IconContainer>{icon}</IconContainer>

        <Text>
          <Title>{title}</Title>

          <Value>{value}</Value>
        </Text>
      </Header>

      {linkLabel && <Footer>{linkLabel} →</Footer>}
    </Card>
  );
};
