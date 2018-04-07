import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, KeyboardAvoidingView  } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../assets/icons/uqueue_logo.png')} style={styles.logo}></Image>
                    <Text style={styles.title}>Welcome to the Ultimate Line Management Tool</Text>
                </View>
                <View style={styles.formContainer}>
                <LoginForm/>
                </View>

            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#708090',
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 140

    },
    title: {
        color:'#ffffff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: .9
    },
    formContainer:{

    }
});