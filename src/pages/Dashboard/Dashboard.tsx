import { StatisticCard, SummaryCard } from "../../components/Dashboard";
import {
  Container,
  StatisticsGrid,
  SummaryGrid,
  Subtitle,
  Title,
} from "./Dashboard.styles";

import {
  Users,
  Car,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

import { useDashboard } from "./hooks/useDashboard";

const Dashboard = () => {
  const { loading, ownersCount, carsCount, carsByCategory, ownersByLicence } =
    useDashboard();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>Dashboard</Title>

      <Subtitle>Overview of your car insurance application</Subtitle>
      <StatisticsGrid>
        <StatisticCard
          title="Total Owners"
          value={ownersCount}
          icon={<Users size={28} />}
        />

        <StatisticCard
          title="Total Cars"
          value={carsCount}
          icon={<Car size={28} />}
        />

        <StatisticCard
          title="Insured Cars"
          value="5"
          icon={<ShieldCheck size={28} />}
        />

        <StatisticCard
          title="Uninsured Cars"
          value="2"
          icon={<ShieldX size={28} />}
        />
      </StatisticsGrid>
      <></>
      <SummaryGrid>
        <SummaryCard
          title="Cars by Category"
          subtitle="Number of cars"
          icon={<Car size={26} />}
          linkLabel="View all cars"
          linkTo="/cars"
          items={[
            {
              label: "EURO3: ",
              value: carsByCategory.EURO3,
            },
            {
              label: "EURO4: ",
              value: carsByCategory.EURO4,
            },
            {
              label: "EURO5: ",
              value: carsByCategory.EURO5,
            },
            {
              label: "EURO6: ",
              value: carsByCategory.EURO6,
            },
            {
              label: "Hybrid: ",
              value: carsByCategory.HYBRID,
            },
            {
              label: "Electric: ",
              value: carsByCategory.ELECTRIC,
            },
          ]}
        />

        <SummaryCard
          title="Owners by Driver's Licence Category"
          subtitle="Number of owners"
          icon={<Users size={26} />}
          linkLabel="View all owners"
          linkTo="/"
          items={[
            {
              label: "A: ",
              value: ownersByLicence.A,
            },
            {
              label: "B: ",
              value: ownersByLicence.B,
            },
            {
              label: "C: ",
              value: ownersByLicence.C,
            },
            {
              label: "D: ",
              value: ownersByLicence.D,
            },
            {
              label: "E: ",
              value: ownersByLicence.E,
            },
            {
              label: "None: ",
              value: ownersByLicence.NONE,
            },
          ]}
        />
      </SummaryGrid>
    </Container>
  );
};

export default Dashboard;
