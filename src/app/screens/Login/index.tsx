import Routes from '@constants/routes';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { signIn } from '@services/AuthService';

import styles from './styles';

const Login = ({ navigation }: any) => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '285076797668-k3nkkctd98mrla4fjip7e563psd514bc.apps.googleusercontent.com',
      offlineAccess: true
    });
  }, []);


  const handlePress = () => navigation.navigate(Routes.Home);

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
        <View style={{ width: '100%' }}>
            <View style={{ alignItems: 'center' }}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
              />
            </View>
          </View>
    </SafeAreaView>
  );
};

export default Login;
