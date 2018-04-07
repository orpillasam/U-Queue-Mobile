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
            <KeyboardAvoidingView behavior="padding" style={styles1.container}> 
            <View style={styles.container}>
                <View style={styles1.logoContainer}>
                    <Image 
                        style={styles1.logo}
                        source={require('../../assets/icons/uqueue_logo.png')} style={styles.logo}></Image>
                    <Text style={styles1.title}>Welcome to the Ultimate Line Management Tool</Text>
                </View>
                <View style={styles1.formContainer}>
                <LoginForm/>
                </View>

            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles1 = StyleSheet.create({
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