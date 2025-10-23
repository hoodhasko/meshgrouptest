import { combineReducers } from '@reduxjs/toolkit';

import { teamSlice, teamsSlice } from '../slices';

export const reducers = combineReducers({
  teams: teamsSlice.reducer,
  team: teamSlice.reducer,
});
