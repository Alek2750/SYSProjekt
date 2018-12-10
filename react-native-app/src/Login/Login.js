import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import { colors } from '../theme'


export default class Login extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../_images/logo.png')}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.Submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Log Ind</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.primary,
        paddingHorizontal: 8,
        margin: 10,
        height: 50
    },
    button: {
        height: 50,
        backgroundColor: '#34725b',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'black'
    },
    image: {
        alignSelf: 'center',
        height: 150,
        width: 300,
        resizeMode: 'contain'
    }
})