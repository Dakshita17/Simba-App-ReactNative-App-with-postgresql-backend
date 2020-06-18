import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'

import Language from '../screens/Language'
import Floatlabel from '../screens/Floatlabel'



const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Language: {screen :Language},
    Floatlabel: {screen :Floatlabel}
  },
  {
    initialRouteName: 'Language'
  }
)

export default AppNavigation
