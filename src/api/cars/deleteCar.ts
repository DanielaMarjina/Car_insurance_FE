import { apiFetch } from '../client';
import { API_ENDPOINTS, API_ERROR_MESSAGES } from '../constants';
import { createApiError } from '../errors';


export const deleteCar = async (
  carId: string
): Promise<void> => {
  const response = await apiFetch(
    `${API_ENDPOINTS.CARS}/${carId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw await createApiError(
      response,
      API_ERROR_MESSAGES.DELETE_CAR
    );
  }
};