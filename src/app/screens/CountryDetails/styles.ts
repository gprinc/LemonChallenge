import { black, green, red, white } from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: white
  },
  listContainer: {
    width: '100%'
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
  ordText: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 15,
    marginBottom: 15
  },
  orderButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: red,
    flex: 0.22
  },
  textButton: {
    fontSize: 16,
    color: black
  },
  selected: {
    backgroundColor: green,
  },
  textSelected: {
    color: white
  },
  errorText: {
    color: red,
    fontSize: 20,
    marginTop: 30
  }
});
