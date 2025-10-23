import { Shift } from '../types';
import { apiClient } from './client';

export const shiftsApi = {
  getShifts: (
    latitude: number,
    longitude: number,
  ): Promise<{ data: Shift[] }> =>
    apiClient
      .get('/shifts/map-list-unauthorized', {
        params: { latitude, longitude },
      })
      .then(response => response.data),
};
