import { useNavigate } from 'react-router-dom';

import type { Car } from '../../api/cars/types';
import { Header } from '../../components/Header';
import { ROUTES } from '../../constants/routes';
import { Button } from '../../components/Button';
import { CarsTable } from './components/CarsTable';
import { useCarsData } from './hooks/useCarsData';
import { Wrapper } from './styles';

/**
 * Renders the paginated Cars table with server-backed filters.
 */
export const Cars = () => {
  const navigate = useNavigate();
  const {
    cars,
    categoryOptions,
    errorMessage,
    filters,
    handleFilterChange,
    handlePaginationChange,
    hasNextCarsPage,
    isLoading,
    makeOptions,
    modelOptions,
    pagination,
    retryCarsRequest,
  } = useCarsData();

  /**
   * Navigates to the selected car details page.
   */
  const viewCar = (car: Car) => navigate(ROUTES.VIEW_CAR(car.id));

  return (
    <div data-testid="cars-page">
        <Wrapper>
            <Header title="Cars" />
            <Button
              type="button"
              data-testid="add-car-button"
              onClick={() => navigate(ROUTES.ADD_CAR)}
            >
              Add Car
            </Button>
          </Wrapper>

      <CarsTable
        cars={cars}
        categoryOptions={categoryOptions}
        errorMessage={errorMessage}
        filters={filters}
        hasNextCarsPage={hasNextCarsPage}
        isLoading={isLoading}
        makeOptions={makeOptions}
        modelOptions={modelOptions}
        pagination={pagination}
        onFilterChange={handleFilterChange}
        onPaginationChange={handlePaginationChange}
        onRetry={retryCarsRequest}
        onViewCar={viewCar}
      /> 
    </div>
  );
};
