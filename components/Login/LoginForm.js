import React, { Component } from 'react';
import { AsyncStorage, StatusBar, StyleSheet, Image, 
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadIntitialState().done();
    }

    _loadIntitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.nagivation.navigate('Profile');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                <StatusBar
                    barStyle='light-content'
                    />
                <TextInput 
                    placeholder="username or email"
                    onChangeText={ (username) => this.setState({username})}
                    placeholderTextColor='rgba(255,255,255,.2)'
                    returnKeyType ='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}/>
                <TextInput 
                    placeholder="password"
                    onChangeText={ (password) => this.setState({password})}
                    placeholderTextColor='rgba(255,255,255,.2)'
                    secureTextEntry 
                    returnKeyType ='go'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    
                    />
                <TouchableOpacity 
                    onPress={this.login}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

    login = () => {

        alert(this.state.username)
        alert(this.state.password)

        fetch('http://192.168.7.66/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.pssword,
            })
        })
        .then((response) => response.json())
        .then ((res) => {
            if (res.success === true) {
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('Profile');
            }
            else {
                alert(res.message);
            }    
        })
        .done();
        

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