import React, { Component } from 'react';
import { StatusBar, StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                <StatusBar
                    barStyle='light-content'
                    />
                <TextInput 
                    placeholder="username or email"
                    placeholderTextColor='rgba(255,255,255,.2)'
                    returnKeyType ='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}/>
                <TextInput 
                    placeholder="password"
                    placeholderTextColor='rgba(255,255,255,.2)'
                    secureTextEntry 
                    returnKeyType ='go'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    
                    />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginBottom: 15,
        color: '#fff',
        paddingHorizontal: 10,
        marginBottom: 30
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    }
});