import { combineReducers } from '@reduxjs/toolkit';

import { teamsSlice } from '../slices';

export const reducers = combineReducers({
  teams: teamsSlice.reducer,
});
