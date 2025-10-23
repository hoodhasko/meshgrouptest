import React, { FC } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { MainStack } from './MainStack';

export const navigationRef = createNavigationContainerRef();

export const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};
