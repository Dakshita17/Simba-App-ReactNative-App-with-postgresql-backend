import React, { Component } from "react";
import { Platform, StyleSheet, View, Picker, Alert } from "react-native";
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import DropDownPicker from 'react-native-dropdown-picker';
export default class HomeActivity extends Component {

  constructor(){
     super();
     this.state={
       Language : 'Choose Language'
       
     }
   }

   getSelectedPickerValue=()=>{
      Alert.alert("Selected Language is : " +this.state.PickerSelectedVal);
    }


  render() {
    return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Home')} />

      

      <Header>Choose your Language</Header>
      
      
      <DropDownPicker
    items={[
        {label: 'Choose your Language', value: 'Choose Language'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
         {label:"Hindi" ,value:"Hindi"},
           {label:"English", value:"English"},
           {label:"Tamil" ,value:"Tamil"},
           {label:"Telugu" ,value:"Telugu"},
           {label:"Punjabi", value:"Punjabi"},
           {label:"Kannada", value:"Kannada"},
    ]}
    defaultValue={this.state.country}
    
    containerStyle={{width: 260, height: 60}}
    style={{backgroundColor: '#ffffff'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
     
      
      

        
      
      
    </Background>
  
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin :30
  },
});

