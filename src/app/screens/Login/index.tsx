import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';

import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector<State, string | null>((state: State) => state.auth.userError);

  const handleSignIn = () => dispatch(authActions.signIn());

  return (
    <SafeAreaView style={styles.container}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleSignIn}
        />
        <Text style={styles.errorText}>{userError || ''}</Text>
    </SafeAreaView>
  );
};

export default Login;
