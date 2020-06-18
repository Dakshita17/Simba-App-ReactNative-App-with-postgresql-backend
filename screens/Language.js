import React, { Component } from "react";
import { Platform, StyleSheet, View, Picker, Alert } from "react-native";
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
export default class HomeActivity extends Component {

  constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
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
      
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="----Choose your Language----"/>
           <Picker.Item label="Hindi" value="Hindi" />
           <Picker.Item label="English" value="English" />
           <Picker.Item label="Tamil" value="Tamil" />
           <Picker.Item label="Telugu" value="Telugu" />
           <Picker.Item label="Punjabi" value="Punjabi" />
           <Picker.Item label="Kannada" value="Kannada" />

         </Picker>

        
      
      
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

