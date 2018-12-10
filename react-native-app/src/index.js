import React, { Component } from 'react';

import Login from './Login/Login';
import Find from './Residence/Find';
import Details from './Residence/Details';

import { colors } from './theme'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

console.disableYellowBox = true

const CitiesNav = createStackNavigator({
    "Find Bolig": { screen: Find },
    "Detajler": { screen: Details },
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: '#000'
        }
    })

const Tabs = createBottomTabNavigator({
    "Boliger": { screen: CitiesNav },
    "Log Ind": { screen: Login }
}, {
        tabBarOptions: {
            activeTintColor: '#34725b',
            labelStyle: {
                fontSize: 16,
                bottom: 10,
            }
        }
    }
)

export default Tabs 