import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { Car } from '../../api/cars/types';
import { Header } from '../../components/Header';
import { ROUTES } from '../../constants/routes';
import { Button } from '../../components/Button';
import { CarsTable } from './components/CarsTable';
import { useCarsData } from './hooks/useCarsData';
import { Wrapper } from './styles';
import { Modal } from '../../components/Modal';
import { deleteCar } from '../../api/cars/deleteCar';

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
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const openDeleteModal = (car: Car) => {
  setCarToDelete(car);
};

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
        onDeleteCar={openDeleteModal}
      /> 
      <Modal
  isOpen={!!carToDelete}
  title="Delete Car"
  description="Are you sure you want to delete this car?"
  primaryCta={{
    label: 'Yes',
    onClick: async () => {
      if (!carToDelete) return;

      await deleteCar(carToDelete.id);
      retryCarsRequest();
      setCarToDelete(null);


    },
  }}
  secondaryCta={{
    label: 'Cancel',
    onClick: () => setCarToDelete(null),
    variant: 'secondary',
  }}
  onClose={() => setCarToDelete(null)}
/>
    </div>
  );
};
