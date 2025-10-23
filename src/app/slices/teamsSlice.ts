import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeamsList } from '../actions';

interface TeamItem {
  id: number;
  name: string;
  crest: string;
}

interface TeamsState {
  teams: TeamItem[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  limit: number;
}

const initialState: TeamsState = {
  teams: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
  limit: 10,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setLightnings: (state, action: PayloadAction<TeamItem[]>) => {
      state.teams = action.payload;
    },
    markLightningViewed: (state, action: PayloadAction<number>) => {
      state.teams = state.teams.map(lightning =>
        lightning.id === action.payload
          ? { ...lightning, is_viewed: true }
          : lightning,
      );
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

        const { count, filters, teams } = payload;

        if (filters.offset === 1) {
          state.teams = teams;
        } else {
          state.teams = [...state.teams, ...teams];
        }

        state.page = filters.offset;
      })
      .addCase(fetchTeamsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  },
});

export const { setLightnings, markLightningViewed } = teamsSlice.actions;
