import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'



export default class Signup extends React.Component  {

goToLogin= () => this.props.navigation.navigate('Login')
goToHome= () => this.props.navigation.navigate('Details1')
render(){
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button color="#00bfff" title='Go to Login' onPress={this.goToLogin} />
      
      <Button color="#00bfff" title='Register' onPress={this.goToHome} />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
