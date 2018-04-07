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
    static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  
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