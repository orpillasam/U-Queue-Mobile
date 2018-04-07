import React from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        onPress= {this.props.navigation.navigate('Queue')}
      <Image
        source={require('../../assets/icons/uqueue_logo.png')}
        style={{ width: 30, height: 30, marginRight: 30 }}
      />
      </TouchableOpacity>
    );
  }
}

export default LogoTitle;
