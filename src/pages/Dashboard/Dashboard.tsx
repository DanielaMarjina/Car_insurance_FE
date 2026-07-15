import {
  StatisticCard,
} from "../../components/Dashboard";

import { useDashboard } from "./hooks/useDashboard";

const Dashboard = () => {
  const {
    loading,
    ownersCount,
    carsCount,
  } = useDashboard();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>

      <StatisticCard
        title="Total Owners"
        value={ownersCount}
      />

      <StatisticCard
        title="Total Cars"
        value={carsCount}
      />

      <StatisticCard
        title="Insured Cars"
        value="--"
      />

      <StatisticCard
        title="Uninsured Cars"
        value="--"
      />
    </>
  );
};

export default Dashboard;