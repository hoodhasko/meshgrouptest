import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SCREEN_NAMES } from '../../config';

export type AppStackParamList = {
  [SCREEN_NAMES.ShiftsListScreen]: undefined;
  [SCREEN_NAMES.ShiftDetailsScreen]: { shiftId: string };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
