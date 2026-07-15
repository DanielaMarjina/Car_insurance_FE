import { useEffect, useState } from "react";

import { getOwners } from "../../../api/owners/getOwners";
import { getCars } from "../../../api/cars/getCars";

export const useDashboard = () => {
  const [loading, setLoading] = useState(true);

  const [ownersCount, setOwnersCount] = useState(0);
  const [carsCount, setCarsCount] = useState(0);

  const [carsByCategory, setCarsByCategory] = useState({
    EURO3: 0,
    EURO4: 0,
    EURO5: 0,
    EURO6: 0,
    HYBRID: 0,
    ELECTRIC: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [ownersResponse, carsResponse] = await Promise.all([
          getOwners(),
          getCars(),
        ]);

        const categories = {
          EURO3: 0,
          EURO4: 0,
          EURO5: 0,
          EURO6: 0,
          HYBRID: 0,
          ELECTRIC: 0,
        };

        carsResponse.items.forEach((car) => {
          if (car.category) {
            categories[car.category]++;
          }
        });

        setCarsByCategory(categories);

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
    carsByCategory,
  };
};
