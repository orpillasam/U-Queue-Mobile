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
         <View style={styles.container}>
            <Text style={styles.header}>Profile </Text>
         </View>  
        )
    }

}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }

});