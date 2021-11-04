import { black } from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10
  },
  title: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
    color: black
  },
  text: {
    fontSize: 14,
    color: black
  } 
});
