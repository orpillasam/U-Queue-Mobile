import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import ModalScreen from './components/ModalScreen/ModalScreen';
import QueueScreen from './pages/QueueScreen/QueueScreen';
import MenuScreen from './pages/MenuScreen/MenuScreen';

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Queue: {
      screen: QueueScreen
    },
    Menu: {
      screen: MenuScreen
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#708090'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    // MyModal: {
    //   screen: ModalScreen
    //}
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}