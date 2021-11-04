import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AppNavigator from '@app/navigator';
import { actionCreators } from '@redux/auth/actions';

const isAndroid = Platform.OS === 'android';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: isAndroid ?
        '285076797668-k3nkkctd98mrla4fjip7e563psd514bc.apps.googleusercontent.com' : '285076797668-8q8pkj4uppqoscqe3vc56luhequuae2t.apps.googleusercontent.com',
      offlineAccess: true
    });
  }, []);

  useEffect(() => {
    dispatch(actionCreators.init());
  }, [dispatch]);

  return <AppNavigator />;
};

export default App;
