import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';

import { colors } from '../theme'

import CenterMessage from '../components/CenterMessage'

export default class Cities extends Component {
    static navigationOptions = {
        title: 'Cities',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    viewCity = (city) => {
        this.props.navigation.navigate('City', { city })
    }

    render() {
        const props = this.props.screenProps;
        return (
            < ScrollView >
                <View>
                    {
                        props.cities.length > 0 ? (
                            props.cities.map((city, index) => (
                                <View key={index}>
                                    <TouchableWithoutFeedback
                                        onPress={() => this.viewCity(city)}
                                    >
                                        <View style={styles.cityContainer}>
                                            <Text style={styles.city}>{city.city}</Text>
                                            <Text style={styles.country}>{city.country}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                            )) : <CenterMessage message="No Cities Found" />
                    }
                </View>
                <TouchableOpacity
                    onPress={props.clearDB}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Clear Database</Text>
                </TouchableOpacity>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20
    },
    country: {
        color: 'rgba(0,0,0,.5)'
    }, button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
})