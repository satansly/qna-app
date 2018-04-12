import Colors from './Colors'
import Fonts from './Fonts'
export default{
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
    padding: 10,
    textAlign: 'center'
  },
  button: {
    ...Fonts.types.body,
    padding: 10,
    textAlign: 'center'
  }
}
