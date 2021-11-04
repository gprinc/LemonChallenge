import { black } from '@constants/colors';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10
  },
  country: {
    fontWeight: 'bold',
    fontSize: 20,
    color: black
  },
  mapContainer: {
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
  },
  
});
