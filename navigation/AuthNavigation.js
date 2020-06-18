import { createStackNavigator } from 'react-navigation-stack'

import Details1 from '../screens/Details1'
import Details2 from '../screens/Details2'
import LoginScreen from '../screens/LoginScreen'

const AuthNavigation = createStackNavigator(
  {
    
    Details1: { screen: Details1 },
    
    LoginScreen: {screen:LoginScreen},
    
    Details2: { screen: Details2 }
    
    
    
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
  }
)

export default AuthNavigation
