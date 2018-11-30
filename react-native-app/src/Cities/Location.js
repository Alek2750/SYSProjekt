import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { colors } from '../theme'

export default class Location extends Component {
    static navigationOptions = (props) => {
        console.log('locationProps: ', props);
        return {
            title: props.navigation.state.params.location.name,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '400'
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Edit Location</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.button, styles.button2]}>
                            <Text style={styles.buttonText}>Remove Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        bottom: 2,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    button2: {
        bottom: 0
    },
})