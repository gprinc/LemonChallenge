import { RouteProp, NavigationProp, NavigationState, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Routes from '@constants/routes';

export interface Navigation {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<Record<string, object | undefined>, string, NavigationState, {}, {}>;
}

export type RootStackParamList = {
  [Routes.Login]: undefined;
  [Routes.Home]: undefined;
  [Routes.CountryDetails]: { name: string };
};

type TypedParams = keyof RootStackParamList;
export type RouteType<T extends TypedParams> = RouteProp<RootStackParamList, T>;
export type NavigationType<T extends TypedParams> = StackNavigationProp<RootStackParamList, T>;

export function useRouteWithParams<T extends TypedParams>() {
  return useRoute<RouteType<T>>();
}