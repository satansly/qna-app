import { StyleSheet } from 'react-native'
import Styles from '../../themes/Styles'
import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
export default StyleSheet.create({
  ...Styles,
  loading: {
    ...Fonts.types.body,
    backgroundColor: Colors.lightgrey,
    textAlign: 'center'
  },
  container: {
    ...Styles.container,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
