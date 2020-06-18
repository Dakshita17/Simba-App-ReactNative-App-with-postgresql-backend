import React, { Component } from 'react';
import { View, StatusBar, TextInput, Animated } from 'react-native';


class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{ height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
  
}



export default class App extends Component {
  state = {
    value: '',
    value2:''
  };

  handleTextChange = (newText) => this.setState({ value: newText });
  handleText2Change = (newText) => this.setState({ value2: newText });

  render() {
    return (
    <View>
      <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
        <StatusBar hidden />
        <FloatingLabelInput
          label="Email"
          value={this.state.value}
          onChangeText={this.handleTextChange}
        />
      </View>
       <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
        <StatusBar hidden />
        <FloatingLabelInput
          label="pass"
          value2={this.state.value2}
          onChangeText={this.handleText2Change}
        />
      </View>
      </View>
    );
  }
}

