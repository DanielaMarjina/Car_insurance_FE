import { StatisticCard, SummaryCard } from "../../components/Dashboard";

import { useDashboard } from "./hooks/useDashboard";

const Dashboard = () => {
  const { loading, ownersCount, carsCount, carsByCategory, ownersByLicence } = useDashboard();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>

      <StatisticCard title="Total Owners" value={ownersCount} />

      <StatisticCard title="Total Cars" value={carsCount} />

      <StatisticCard title="Insured Cars" value="--" />

      <StatisticCard title="Uninsured Cars" value="--" />

      <SummaryCard
        title="Cars by Category"
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
    </>
  );
};

export default Dashboard;
