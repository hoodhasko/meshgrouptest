import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SCREEN_NAMES } from '../../config';

export type AppStackParamList = {
  [SCREEN_NAMES.TeamsListScreen]: undefined;
  [SCREEN_NAMES.TeamDetailsScreen]: { teamName: string; teamId: number };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
