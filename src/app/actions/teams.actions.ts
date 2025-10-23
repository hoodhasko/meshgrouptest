import { createAsyncThunk } from '@reduxjs/toolkit';
import { TeamListResponse, TeamService } from '../services';

export const fetchTeamsList = createAsyncThunk<
  { data: TeamListResponse; page: number },
  { limit?: number; page?: number },
  { rejectValue: string }
>('teams', async ({ limit = 20, page = 1 }, { rejectWithValue }) => {
  try {
    const newOffset = (page - 1) * limit;
    const response = await TeamService.fetchTeamsList(limit, newOffset);

    return { data: response.data, page };
  } catch (err: any) {
    const message =
      err.response?.data?.message ||
      err.message ||
      'Ошибка при загрузке матчей';
    return rejectWithValue(String(message));
  }
});
