import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Tabs from './src'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { cities: [] }
  }

  render() {
    console.log(this.state.cities);
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
        }}
      />
    )
  }
}

