import Routes from '@constants/routes';
import { blue, white } from '@constants/colors';
import { Navigation } from '@interfaces/navigation';

// Default nav options for all screens
const defaultNavOptions = () => ({
    headerStyle: {
      backgroundColor: blue
    },
    headerBackTitleStyle: {
      color: white
    },
    headerTitleStyle: {
      color: white
    },
    headerTintColor: white
});

export const stackConfig = {
  screenOptions: defaultNavOptions,
  initialRouteName: Routes.Login
};

export const screensNavOptions = {
    [Routes.Login]: {
      headerShown: false
    },
    [Routes.Home]: {
      headerShown: false
    }
  };
