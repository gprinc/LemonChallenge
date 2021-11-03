import { black, blue, white } from '@constants/colors';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 15,
    padding: 15,
    borderRadius: 20,
    width: '60%',
    backgroundColor: blue,
    alignItems: 'center'
  },
  buttonText: {
    color: white
  },
  separator: {
    height: 2,
    width: '80%',
    backgroundColor: black,
    alignSelf: 'center'
  },
  fullWidth: {
    width: '100%'
  }
});
