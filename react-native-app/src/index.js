import React, { Component } from 'react';

import AddCity from './AddCity/AddCity';
import Cities from './Cities/Cities';
import City from './Cities/City';
import Location from './Cities/Location';

import { colors } from './theme'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

console.disableYellowBox = true

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City },
    Location: { screen: Location }
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: '#fff'
        }
    })

const Tabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
}, {
        tabBarOptions: {
            labelStyle: {
                fontSize: 16,
                bottom: 10,
            }
        }
    }
)

export default Tabs 