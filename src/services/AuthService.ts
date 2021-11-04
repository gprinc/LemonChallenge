import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = 'isLogged';

export const setAuth = (isLogged: boolean) =>
  AsyncStorage.setItem(AUTH_KEY, JSON.stringify(isLogged));
export const getAuth = () => AsyncStorage.getItem(AUTH_KEY).then(value => JSON.parse(`${value}`));
export const removeAuth = () => AsyncStorage.removeItem(AUTH_KEY);