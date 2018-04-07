import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Button, Image, View, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from '../../pages/HomeScreen';
import DetailsScreen from '../../pages/DetailsScreen';
import ModalScreen from '../ModalScreen/ModalScreen';
import MyNotificationsScreen from '../MyNotificationsScreen/MyNotificationsScreen';

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const csDrawerIcon = ({ tintColor }) => getDrawerIcon('user-md', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);
const csNavOptions = getDrawerNavigationOptions('Customer Service', Colors.primary, 'white', csDrawerIcon);

const Drawer = DrawerNavigator({
    HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
    UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
    CustomerServiceScreen: { screen: CustomerServiceScreen, navigationOptions: csNavOptions },
  }, getDrawerConfig(300, 'left'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('RNChat', Colors.primary, 'white', getDrawerItem(navigation));



export default Drawer;