import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import { RootStackParamList } from '@interfaces/navigation';
import Login from '@screens/Login';
import Home from '@screens/Home';
import CountryDetails from '@screens/CountryDetails';
import withLoadable from '@components/Loadable'
import { State } from '@interfaces/reduxInterfaces';

import { navigationRef, getActiveRoute, getRoute } from './helper';
import { stackConfig, screensNavOptions } from './options';

const Stack = createStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <>
    <Stack.Screen name={Routes.Login} component={Login} options={screensNavOptions[Routes.Login]} />
  </>
);

const HomeStack = () => (
  <>
    <Stack.Screen name={Routes.Home} component={Home} options={screensNavOptions[Routes.Home]} />
    <Stack.Screen name={Routes.CountryDetails} component={CountryDetails} options={({ route }) => ({ title: route?.params?.name })} />
  </>
);

const AppNavigator = () => {
  const user = useSelector((state: State) => state.auth.user);
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
          {user ? HomeStack() : AuthStack()}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withLoadable(() => useSelector((state: State) => state.auth.initialLoading))(AppNavigator);
