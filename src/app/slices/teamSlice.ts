import { createSlice } from '@reduxjs/toolkit';
import { fetchTeamData } from '../actions';
import { TeamDataResponse } from '../services';

interface TeamState {
  team: TeamDataResponse | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  team: undefined,
  loading: false,
  error: null,
};

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    resetTeamData: state => {
      state.team = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeamData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.team = payload;
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  },
});

export const { resetTeamData } = teamSlice.actions;
