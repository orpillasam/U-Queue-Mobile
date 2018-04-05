import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/icons/uqueue_logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default LogoTitle;
