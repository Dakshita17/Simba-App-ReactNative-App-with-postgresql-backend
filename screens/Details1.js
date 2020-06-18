import React from 'react'
import { useState } from "react";
import { StyleSheet,Picker, View,Platform,Alert} from 'react-native'
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Details1 extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = {
      PickerSelectedVal : '',
      fname: '',
    lname: '',
    pin:'',
    country: 'Choose Country'
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

    handlePinChange = pin => {
    this.setState({ pin })
  }
  onLogin = async () => {
    const { fname, lname,pin,PickerSelectedVal} = this.state
    try {
      if (fname.length > 0 && lname.length > 0) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }
  
  goToNext = () => this.props.navigation.navigate('Floatlabel')
  render() {
    const { lname, fname } = this.state
    
    return (
     <Background>
      <BackButton goBack={() => navigation.navigate('Details2')} />
      
      <Header>Register</Header>
      
      
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={fname.value}
        onChangeText={this.handleFnameChange}
        autoCapitalize="none"
        
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lname.value}
        onChangeText={this.handleLnameChange}
        autoCapitalize="none"
        
      />

        <DropDownPicker
    items={[
        {label: 'Choose your Country', value: 'Choose Country'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    
    containerStyle={{width: 260, height: 60}}
    style={{backgroundColor: '#ffffff'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
     
        

         
         <TextInput
        label="PinCode"
        returnKeyType="next"
        value={lname.value}
        onChangeText={this.handleLnameChange}
        autoCapitalize="none"
        
      />
         
      
         
        <Button color="#00bfff" title='Go to Next' onPress={this.goToNext} />
      
      
    </Background>
    )
  }
}
const stylespicker = StyleSheet.create ({  
     container: {  
         flex: 0.5,  
         alignItems: 'center',  
         justifyContent: 'center', 
          height: 350,  
        width: "match-parent",
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 350,  
        width: "match-parent",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
});

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
