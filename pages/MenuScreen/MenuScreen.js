import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  List,
  ListItem,
  FlatList,
  StyleSheet
} from 'react-native';
import  LogoTitle  from '../../components/LogoTitle/LogoTitle';

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        username: '',
        password: '',
    }
}

  static navigationOptions = {
    // header: true,
    headerTitle: "U-QUEUE",
    headerTitleStyle: {
      marginLeft: 140,
      alignText: 'center',
      color: "#fff"
    },
    headerStyle: {
      backgroundColor: '#708090'
    },
  //   headerRight:( <Image  onPress={() => navigation.navigate('Queue')}
  //   source={require('../../assets/icons/refresh.png')}
  //   style={{ width: 30, height: 30 }}

  // />
  // )
    // headerTintColor: '#blue',
    // headerTitleStyle: {
    //   fontWeight: 'bold'
    // <TouchableOpacity>
    // onPress= {this.props.navigation.navigate('Queue')}</TouchableOpacity>

}
  
    render() {

        return (
          <Image 
            style={styles.menu}
            source={require('../../assets/images/menu.png')}></Image>
        );
      }
    }

const styles = StyleSheet.create({
  menu: {
    width: 460,
    height: 640     
  }
})

export default MenuScreen;