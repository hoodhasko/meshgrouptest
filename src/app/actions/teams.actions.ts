import { createAsyncThunk } from '@reduxjs/toolkit';
import { TeamListResponse, TeamService } from '../services';

export const fetchTeamsList = createAsyncThunk<
  TeamListResponse,
  { page?: number },
  { rejectValue: string }
>('teams', async ({ page = 1 }, { rejectWithValue }) => {
  console.log('first');
  try {
    const response = await TeamService.fetchTeamsList();

    console.log('response', response);

    return response.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message ||
      err.message ||
      'Ошибка при загрузке матчей';
    return rejectWithValue(String(message));
  }
});
