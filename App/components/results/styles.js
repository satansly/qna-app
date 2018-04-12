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
    padding: 20
  },
  body: {
    ...Fonts.types.body,
    padding: 10
  },
  button: {
    ...Fonts.types.body,
    padding: 10,
    textAlign: 'center'
  },
  itemContainer: {
    flexDirection: 'row'
  },
  item: {
    ...Fonts.types.body,
    color: '#555',
    padding: 10
  }
})
