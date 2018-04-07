import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LogoTitle from './components/LogoTitle/LogoTitle';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.headline}>HELLO U-QUEUE</Text>
                <Image source={require('./assets/icons/uqueue_logo.png')} style={styles.logo}>
                </Image>
                    <Text style={styles.title}>Welcome to the Ultimate Line Management Tool</Text>       
                
                <View style={styles.container}>
                    <TouchableOpacity 
                        // onPress={this.login}
                        // onPress={this.props.nagivation.navigate('Profile')}
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                        // onPress={this.login}
                        // onPress={this.props.nagivation.navigate('Profile')}
                        onPress={() => this.props.navigation.navigate('Signup')}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGNUP</Text>
                        
                    </TouchableOpacity>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // We set flex to 1 since it's taking up the whole screen
    wrapper: { 
        backgroundColor: '#ffffff',
        flex: 1,
        // flexDirection: "column",\
        justifyContent: 'center',
        marginTop: 10,
        alignItems: "center"
      // Giving some extra top margin to the iOS container so the content isn't in the statusbar
    },
    logo: {
        // flex: 1,
        // flexDirection: "column",
        // marginTop: 40,
        justifyContent: 'center',
        alignItems: "center",
        width: 350,
        height: 330
      // Giving some extra top margin to the iOS container so the content isn't in the statusbar
    },
    headline: {
        color: '#708090',
        flex: 1,
        marginTop: 90,
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        // fontFamily: 'Exo',
        flexDirection: "column",
        alignItems: "center",
      // Giving some extra top margin to the iOS container so the content isn't in the statusbar
    },
    title: {
        color: '#708090',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        marginTop: 30,
        fontSize: 20,
        // fontFamily:'Exo',
        alignItems: "center",
      // Giving some extra top margin to the iOS container so the content isn't in the statusbar
    },
    container: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        height: 40,
        width: 300,
        
        marginTop: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        marginBottom: 10
    }

});