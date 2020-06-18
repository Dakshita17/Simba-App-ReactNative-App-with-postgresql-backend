//This is an example code to get DatePicker//
import React, { Component } from 'react';
//import react in our code.
import { View, StyleSheet } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed
import DropDownPicker from 'react-native-dropdown-picker';

import {Dropdown} from 'react-native-material-dropdown';

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { date: '15-05-2018',country: 'Choose Country'};

  }

  render() {
  let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View style={styles.container}>
      
      <DropDownPicker
    items={[
        {label: 'Choose your Country', value: 'Choose Country'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    
    containerStyle={{width: 200, height: 70}}
    style={{backgroundColor: '#fafafa'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1996"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <Dropdown
        label='Favorite Fruit'
        data={data}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
});

