import Routes from '@constants/routes';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';

import styles from './styles';

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const userError = useSelector<State, string | null>((state: State) => state.auth.userError);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '285076797668-k3nkkctd98mrla4fjip7e563psd514bc.apps.googleusercontent.com',
      offlineAccess: true
    });
  }, []);


  const handleSignIn = () => dispatch(authActions.signIn());
  const handlePress = () => navigation.navigate(Routes.Home);

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleSignIn}
        />
        {userError && <Text style={styles.errorText}>{userError}</Text>}
    </SafeAreaView>
  );
};

export default Login;
