import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Headline}>Welcome page</Text>
        <ButtonHandler/>
      </View>
    );
  }
}

class ButtonHandler extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View>
          <Button
            onPress={this._onPressButton}
            title="Press here to fetch data"
          />
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Headline: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

