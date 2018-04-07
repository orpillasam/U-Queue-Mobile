import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class SettingsScreen extends Component {

  
  render() {
    return (
      <View styles={styles.container}>
      <ScrollView  >
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 40,
   
    
  }
})

export default SettingsScreen;