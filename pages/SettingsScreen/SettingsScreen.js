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

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />, 
    };
  };
  
    render() {

        return (
          <View>
            <Text style = {styles.text}>Settings</Text>
         </View>
        );
      }
    }
    

    const styles = StyleSheet.create({
      // We set flex to 1 since it's taking up the whole screen
      container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
        alignItems: "center",
        // Giving some extra top margin to the iOS container so the content isn't in the statusbar
      },
      text: {
        fontWeight: '700'
      }
      });


export default SettingsScreen;