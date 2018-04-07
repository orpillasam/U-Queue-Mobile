import React, { Component } from 'react';
import { AsyncStorage, StatusBar, StyleSheet, Image, 
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            this.props.nagivation.navigate('Home');
        }
    }

    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container1}> 
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../../assets/icons/uqueue_logo.png')} style={styles.logo}></Image>
                        <Text style={styles.title}>Welcome to the Ultimate Line Management Tool</Text>
                    </View>

                    <View style={styles.formContainer}>
                    
                        <View style={styles.container}>
                            <StatusBar
                                barStyle='light-content'
                                />
                            <TextInput 
                                placeholder="phone number"
                                onChangeText={ (username) => this.setState({username})}
                                placeholderTextColor='rgba(255,255,255,.2)'
                                returnKeyType ='next'
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.input}
                            />
                            <TextInput 
                                placeholder="email"
                                onChangeText={ (username) => this.setState({username})}
                                placeholderTextColor='rgba(255,255,255,.2)'
                                returnKeyType ='next'
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.input}
                            />
                            <TextInput 
                                placeholder="password"
                                onChangeText={ (password) => this.setState({password})}
                                placeholderTextColor='rgba(255,255,255,.2)'
                                secureTextEntry={true}
                                returnKeyType ='go'
                                style={styles.input}
                                ref={(input) => this.passwordInput = input}              
                            />
                            <TouchableOpacity 
                                // onPress={this.login}
                                // onPress={this.props.nagivation.navigate('Profile')}
                                onPress={() => this.props.navigation.navigate('Home')}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>SIGNUP</Text>
                                
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
  
        );
    }

    login = () => {

        // alert(this.state.username)
        // alert(this.state.password)

        fetch('http://192.168.70.152/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then ((res) => {

            alert(res.message); 
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

    container1: {
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

    },

    container: {
        padding: 20,
        marginTop: 100
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginBottom: 15,
        color: 'black',
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