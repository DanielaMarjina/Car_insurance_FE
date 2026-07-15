import type { StatisticCardProps } from "./StatisticCard.types";

import {
    Card,
    Header,
    IconWrapper,
    Title,
    Value,
} from "./StatisticCard.styles";

export const StatisticCard = ({
    title,
    value,
    icon,
}: StatisticCardProps) => {

    return (

        <Card>

            <Header>

                <Title>{title}</Title>

                <IconWrapper>
                    {icon}
                </IconWrapper>

            </Header>

            <Value>{value}</Value>

        </Card>

    );
};