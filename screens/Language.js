import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert } from "react-native";

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
      <View style={styles.container}>
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

        
      </View>
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
