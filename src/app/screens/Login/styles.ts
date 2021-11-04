import { StyleSheet } from 'react-native';
import { red } from '@constants/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  googleButton: {
    width: '80%',
    height: 80
  },
  errorText: {
    color: red,
    fontSize: 20,
    marginTop: 30
  }
});

