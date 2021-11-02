import Routes from '@constants/routes';
import { blue, white } from '@constants/colors';
import { Navigation } from '@interfaces/navigation';

// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
    headerTitle: route.name,
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

export const screensNavOptions: any = {
    [Routes.Login]: {
      headerShown: false
    },
    [Routes.Home]: {
      headerMode: 'none'
    }
  };
