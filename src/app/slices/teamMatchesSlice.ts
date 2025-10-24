import { createSlice } from '@reduxjs/toolkit';
import { fetchTeamMatches } from '../actions';
import { TeamMatchesItemResponse } from '../services';

interface TeamMatchesState {
  matches: TeamMatchesItemResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: TeamMatchesState = {
  matches: [],
  loading: false,
  error: null,
};

export const teamMatchesSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    resetTeamMatches: state => {
      state.matches = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeamMatches.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMatches.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.matches = payload.matches;
      })
      .addCase(fetchTeamMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  },
});

export const { resetTeamMatches } = teamMatchesSlice.actions;
