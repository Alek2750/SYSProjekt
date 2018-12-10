import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import { colors } from '../theme'

export default class Details extends Component {
    static navigationOptions = (props) => {
        console.log('cityProps: ', props);
        return {
            title: props.navigation.state.params.target.address,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '400'
            }
        }
    }

    render() {
        const residence = this.props.navigation.state.params.target;
        console.log('residence: ', residence);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={require('../_images/placeholder.jpg')}

                            />
                        
                            <Text style={styles.name}>{residence.rooms} værelses {residence.proptype.toString().toLowerCase()} på {residence.size}m²</Text>                            
                            <Text style={styles.info}>{residence.city} - {residence.floor}{"\n"}</Text>

                            <Text style={[styles.info, styles.rent]}>Månedlig leje {residence.rent},-</Text>
                            <Text style={styles.info}>
                                Månedlig aconto {residence.aconto},-{"\n"}
                                Depositum {residence.deposit},-{"\n"}{"\n"}
                                Overtagelse {residence.startperiod}{"\n"}
                                {residence.period} lejeperiode
                            </Text>

                            <Text style={styles.name}>{"\n"}Detaljer om bolig</Text>
                            <Text style={styles.info}>
                                Boligtype: {residence.proptype}{"\n"}
                                Størrelse: {residence.size}m²{"\n"}
                                Værelser: {residence.rooms}{"\n"}
                                Etage: {residence.floor}{"\n"}
                                Møbleret: {residence.funiture ? 'Ja' : 'Nej'}{"\n"}
                                Delevenlig: {residence.shareable ? 'Ja' : 'Nej'}{"\n"}
                                Husdyr tilladt: {residence.animals ? 'Ja' : 'Nej'}{"\n"}
                                Energimærke: {residence.energy}{"\n"}
                            </Text>

                            <Text style={styles.name}>Detaljer om udlejning</Text>
                            <Text style={styles.info}>
                                Lejeperiode: {residence.period}{"\n"}
                                Overtagelsesdato: {residence.startperiod}{"\n"}
                                Månedlig Husleje: {residence.rent},-{"\n"}
                                Aconto: {residence.aconto}{"\n"}
                                Depositum: {residence.deposit},-{"\n"}
                                Oprettelsesdato: {residence.created}{"\n"}
                            </Text>
                        </View>
                    }
                </ScrollView>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,/*
        borderBottomColor: colors.primary,
        borderBottomWidth: 2, */
    },
    image: {
        alignSelf: 'center',
        height: 150,
        width: 300,
    },
    rent: {
        color: '#42b0f4'
    },
    name: {
        fontSize: 20
    },
    info: {
        color: 'rgba(0,0,0,.5)',
        fontSize: 14,
    },
    input: {
        position: 'absolute',
        height: 52,
        backgroundColor: colors.primary,
        width: '100%',
        bottom: 102,
        left: 0,
        color: 'white',
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    input2: {
        bottom: 50,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
})