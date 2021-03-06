import React from 'react';
import { StyleSheet, Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  LogoTitle  from '../../components/LogoTitle/LogoTitle';
import { List, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import  MenuButton  from '../../components/Buttons/MenuButton';

class HomeScreen extends React.Component {
  
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
      marginLeft: 200,
      alignText: 'center',
      color: "#fff"
    },
    headerStyle: {
      backgroundColor: '#708090'
    },
    headerRight:( <Image  onPress={() => this.props.navigation.navigate('Home')}
    source={require('../../assets/icons/refresh.png')}
    style={{ width: 30, height: 30 }}

  />
  )
    // headerTintColor: '#blue',
    // headerTitleStyle: {
    //   fontWeight: 'bold'
    // <TouchableOpacity>
    // onPress= {this.props.navigation.navigate('Queue')}</TouchableOpacity>

}
    // static navigationOptions = ({ navigation }) => {
    //   const params = navigation.state.params || {};
  
    //   return {

        
    //     headerTitle: <LogoTitle />,
    //     // headerLeft: (
    //     //   <Button
    //     //     onPress={() => navigation.navigate('MyModal')}
    //     //     title="Info"
    //     //     color="#708090"
    //     //   />
    //     // ),
    //     headerRight: (
    //       <Button  onPress={() =>  navigation.navigate('Queue')} title="Q" color="#708090" />
    //     ),
    //   };
    // };
  
    // componentWillMount() {
    //   this.props.navigation.setParams({ increaseCount: this._increaseCount });
    // }
  
    // state = {
    //   count: 0,
    // };
  
    // _increaseCount = () => {
    //   this.setState({ count: this.state.count + 1 });
    // };
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.headline}>Queue Position</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.numberData}>6</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.headline}>Wait Time</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.numberData}>24 Minutes</Text>
          </View>
        
          <Button style={styles.buttonContainer}
          title="Menu Button"
          onPress={() => this.props.navigation.navigate('Menu')}
          
           />

           {/* <TouchableOpacity>
           onPress={this.login}
          onPress={this.props.nagivation.navigate('Profile')}
           onPress={() => this.props.navigation.navigate('Menu')}
          style={styles.buttonContainer}>
           <Text style={styles.buttonText}>MENU</Text>

           </TouchableOpacity> */}
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
    backgroundColor: "#fff"
    // Giving some extra top margin to the iOS container so the content isn't in the statusbar
  },

  // We set row to 1.
  // Each will be one-xth of the screen,
  // with x being the number of rows in the app.
  // Since we have seven rows, each will take up 1/7th of the screen.
  // row: {
  //   flex: 1,
  //   // flexDirection: "column",
  //   alignItems: 'center', 
  //   // justifyContent: 'center'
  // },

  // Box styles
  // Box's flex also gets set to 1.
  // Since there's 4 elements in each row, each box is 1/4 of screen.
  // They'll be placed horizontally as per row's flex direction.
  box: {
    flex: 1, // Two eighths of the screen.
    margin: 10,
    alignItems: "center", // Center child elements horizontally.
    justifyContent: "center" // Center child elements vertically.
  },
  numberData: {
      color: "#ff6347",
      fontSize: 52
  },

  // Text styles
  headline: {
    color: "#8fbc8b",
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    height: 40,
    width: 300,
    
    marginTop: 15,
},
buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 15,
    fontSize: 20
}
});


  export default HomeScreen;