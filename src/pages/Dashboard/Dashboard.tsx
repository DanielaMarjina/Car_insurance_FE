import {
  StatisticCard,
  SummaryCard,
} from "../../components/Dashboard";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <StatisticCard
        title="Total Owners"
        value={125}
      />

      <SummaryCard
        title="Cars by Category"
        items={[
          { label: "EURO3", value: 12 },
          { label: "EURO4", value: 18 },
          { label: "EURO5", value: 22 },
          { label: "EURO6", value: 30 },
          { label: "Hybrid", value: 8 },
          { label: "Electric", value: 3 },
        ]}
      />
    </>
  );
};

export default Dashboard;