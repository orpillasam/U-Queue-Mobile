import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import ModalScreen from './components/ModalScreen/ModalScreen';
import QueueScreen from './pages/QueueScreen/QueueScreen';
import SettingsScreen from './pages/SettingsScreen/SettingsScreen';
import MenuScreen from './pages/MenuScreen/MenuScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './components/Login/Login';
import Splash from './Splash';
import LoginForm from './components/Login/LoginForm';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import LogoTitle  from './components/LogoTitle/LogoTitle';

const StartStack = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Login: {
      screen: LoginForm
    }, 
    Signup: {
      screen: Signup
    },
  },
  {
    initialRouteName: 'Splash',
    navigationOptions: {
      header: false
      // headerStyle: {
      //   backgroundColor: '#708090'
      // }
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold'
      // }
    }
  }
);

const MainStack = StackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    // Queue: {
    //   screen: QueueScreen
    // },
    Menu: {
      screen: MenuScreen
    },
  },
  {
  navigationOptions: {
    // header: false,
    headerTitle: <LogoTitle />,
    // headerStyle: {
    //   backgroundColor: '#708090'
    // },
    // headerTintColor: '#blue',
    // headerTitleStyle: {
    //   fontWeight: 'bold'
    // }
  }
  }
)

// const AppStack = StackNavigator (
//   {
//     Start: {
//       screen: StartStack
//     },
//     Home: {
//       screen: MainStack
//     },  
      // Tabs: {
    //   screen: Tabs
    // }

//   }
// )



// const MainStack = StackNavigator(
//   {
//     Home: {
//       screen: Login
//     },
//     MemberArea: {
//       screen: HomeScreen
//     },
//     Queue: {
//       screen: QueueScreen
//     },
//     Menu: {
//       screen: MenuScreen
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#708090'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold'
//       }
//     }
//   }  
// );

export default Tabs = TabNavigator(
  {
    Home: { screen: MainStack },
    Queue: {screen: QueueScreen },
    Settings: { screen: SettingsScreen },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Queue') {
          iconName = `ion-load-a${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

