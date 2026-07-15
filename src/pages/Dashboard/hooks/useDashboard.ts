import { useEffect, useState } from "react";

import { getOwners } from "../../../api/owners/getOwners";
import { getCars } from "../../../api/cars/getCars";

export const useDashboard = () => {
  const [loading, setLoading] = useState(true);

  const [ownersCount, setOwnersCount] = useState(0);
  const [carsCount, setCarsCount] = useState(0);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [ownersResponse, carsResponse] =
          await Promise.all([
            getOwners(),
            getCars(),
          ]);

        setOwnersCount(ownersResponse.count);
        setCarsCount(carsResponse.count);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return {
    loading,
    ownersCount,
    carsCount,
  };
};