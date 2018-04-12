import { StyleSheet } from 'react-native'
import Styles from '../../themes/Styles'
import Fonts from '../../themes/Fonts'
import Colors from '../../themes/Colors'
export default StyleSheet.create({
  ...Styles,
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    overflow: 'hidden'
  },
  item: {
    ...Fonts.types.body,
    color: Colors.darkgrey,
    margin: 10
  }
})
