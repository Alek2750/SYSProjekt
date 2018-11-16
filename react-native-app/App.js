import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Headline}> Welcome page </Text>
        <ButtonFetch />

      </View>
    );
  }
}

class ButtonFetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount = async () => {
    await fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  buttonclick(item) {
    Alert.alert(item.title, item.releaseYear)
  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (

      <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, paddingTop: 50 }}>
            <Text>{item.title}, {item.releaseYear}</Text>
            <Button
              onPress={() => this.buttonclick(item)} title="Press here" />
          </View>
        )}
        keyExtractor={item => item.id}
      />

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  Headline: {
    color: 'blue',
    fontWeight: "400",
    fontSize: 30
  },
});