import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgrey,
    justifyContent: 'space-between'
  },
  title: {
    ...Fonts.types.title,
    padding: 20,
    textAlign: 'center'
  },
  body: {
    ...Fonts.types.body,
    margin: 10,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    ...Fonts.types.body,
    padding: 10,
    textAlign: 'center'
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})
