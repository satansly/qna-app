import { StyleSheet } from 'react-native'
import Styles from '../../themes/Styles'
import Colors from '../../themes/Colors'
export default StyleSheet.create({
  ...Styles,
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.black
  },
  body: {
    ...Styles.body,
    margin: 20
  }
})
