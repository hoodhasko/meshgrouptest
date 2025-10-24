import { combineReducers } from '@reduxjs/toolkit';

import { teamMatchesSlice, teamSlice, teamsSlice } from '../slices';

export const reducers = combineReducers({
  teams: teamsSlice.reducer,
  team: teamSlice.reducer,
  teamMatches: teamMatchesSlice.reducer,
});
