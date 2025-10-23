import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import { ShiftsListScreen } from '../../screens';
import { SCREEN_NAMES } from '../../config';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const MainStack: FC = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.ShiftsListScreen}
        component={ShiftsListScreen}
        options={{ title: 'Список смен' }}
      />
      {/* <Stack.Screen
        name={SCREEN_NAMES.ShiftDetailsScreen}
        component={ShiftDetailsScreen}
        options={{ title: 'Детали смены' }}
      /> */}
    </Stack.Navigator>
  );
};
