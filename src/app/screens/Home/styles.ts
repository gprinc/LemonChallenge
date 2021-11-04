import { black, blue, white, red } from '@constants/colors';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white
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
    width: '50%',
    backgroundColor: black,
    alignSelf: 'center'
  },
  fullWidth: {
    width: '100%'
  },
  errorText: {
    color: red,
    fontSize: 20,
    marginTop: 30
  }
});
