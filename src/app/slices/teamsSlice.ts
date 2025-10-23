import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeamsList } from '../actions';
import { TeamListItemResponse } from '../services';

interface TeamsState {
  teams: TeamListItemResponse[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

const initialState: TeamsState = {
  teams: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    resetTeams: state => {
      state.teams = [];
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeamsList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamsList.fulfilled, (state, { payload }) => {
        state.loading = false;

        const {
          data: { teams },
          page,
        } = payload;

        if (page === 1) {
          state.teams = teams;
        } else {
          state.teams = [...state.teams, ...teams];
        }

        state.page = page;
      })
      .addCase(fetchTeamsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  },
});

export const { resetTeams } = teamsSlice.actions;
