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

const URL = 'https://gonners.dk/BoligRunnerBackend/api/info';

export default class Find extends Component {
    state = {
        data: []
    };

    static navigationOptions = {
        title: 'Find Bolig',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: '400'
        }
    }

    componentDidMount() {
        this.FetchHousing();
    }

    viewResidence = (target) => {
        this.props.navigation.navigate('Detajler', { target })
    }

    FetchHousing = async () => {
        const response = await fetch(URL + '/Housing');
        const json = await response.json();
        this.setState({ data: json });
    }

    render() {
        console.log(this.props);
        return (
            < ScrollView >
                <View>
                    {
                        this.state.data && this.state.data.map((target, index) => (
                            <View key={index}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.viewResidence(target)}
                                >
                                    <View style={styles.cityContainer}>
                                        <Text style={styles.city}>{target.address}</Text><Text style={styles.county}>{target.city}</Text>
                                        <Text style={styles.country}>{target.rooms} Værelser · {target.size}m² · {target.rent},-</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        ))
                    }
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 15,
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