import React, { useState } from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@screens/Login';
import Home from '@screens/Home';

import { navigationRef, getActiveRoute, getRoute } from './helper';
import { stackConfig, screensNavOptions } from './options';
import Routes from '@constants/routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [routeName, setRouteName] = useState<string | null>(null);

  const onStateChange = (state?: NavigationState) => {
    const previousRouteName = routeName;
    const currentRouteName = getRoute(state).name;
    if (previousRouteName !== currentRouteName) {
      setRouteName(currentRouteName);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(getActiveRoute().name);
      }}
      onStateChange={onStateChange}>
        <Stack.Navigator {...stackConfig}>
            <Stack.Screen name="Login" component={Login} options={screensNavOptions[Routes.Login]} />
            <Stack.Screen name="Home" component={Home} options={screensNavOptions[Routes.Home]} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
