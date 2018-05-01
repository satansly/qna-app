import { StackNavigator } from 'react-navigation'
import Screens from './screens'
import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
export default StackNavigator(Screens, {
  initialRouteName: 'Intro',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.lightgrey
    },
    headerTintColor: Colors.lightgrey,
    headerTitleStyle: {
      ...Fonts.types.header
    }
  }
})
