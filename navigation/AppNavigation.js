import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Details1 from '../screens/Details1'
import Language from '../screens/Language'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Details1: { screen : Details1},
    Language: {screen :Language}
  },
  {
    initialRouteName: 'Details1'
  }
)

export default AppNavigation
