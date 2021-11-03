import Routes from '@constants/routes';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import styles from './styles';

const Login = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePress = () => navigation.navigate(Routes.Home);

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
        <TouchableOpacity onPress={handlePress}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
