import React from 'react'
import { useState } from "react";
import { StyleSheet,Picker, View, Button, TextInput ,Platform,Alert} from 'react-native'



export default class Details1 extends React.Component {
  state = {
    fname: '',
    lname: ''
  }
   constructor(props) {
    super(props);
    this.state = {
      PickerSelectedVal : ''
    };
  }
  getSelectedPickerValue=()=>{
      Alert.alert("Selected Language is : " +this.state.PickerSelectedVal);
    }

  
  handleFnameChange = fname => {
    this.setState({ fname })
  }

  handleLnameChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { fname, lname } = this.state
    try {
      if (fname.length > 0 && lname.length > 0) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }
  
  goToNext = () => this.props.navigation.navigate('Language')
  render() {
    const { lname, fname } = this.state
    
    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <TextInput
            name='fname'
            value={fname}
            placeholder='Enter First Name'
            autoCapitalize='none'
            onChangeText={this.handleFnameChange}
          />
        </View>
        <View style={{ margin: 10 }}>
          <TextInput
            name='lname'
            value={lname}
            placeholder='Enter Last Name'
            secureTextEntry
            onChangeText={this.handleLnameChange}
          />
        </View>
        <View style={styles1.container}>
        <View style={{ margin: 10 }}>
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="India" value="India" />
           <Picker.Item label="USA" value="USA" />
           <Picker.Item label="China" value="China" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="United Kingdom" value="United Kingdom" />
           <Picker.Item label="France" value="France" />

         </Picker>
         </View>
      </View>
         
        <Button color="#00bfff" title='Go to Next' onPress={this.goToNext} />
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
