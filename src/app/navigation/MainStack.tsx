import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import { TeamsListScreen, TeamDetailsScreen } from '../../screens';
import { SCREEN_NAMES } from '../../config';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const MainStack: FC = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.TeamsListScreen}
        component={TeamsListScreen}
        options={{ title: 'Список команд' }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.TeamDetailsScreen}
        component={TeamDetailsScreen}
        options={({ route: { params } }) => ({
          title: params?.teamName ?? 'Детали команды',
        })}
      />
    </Stack.Navigator>
  );
};
