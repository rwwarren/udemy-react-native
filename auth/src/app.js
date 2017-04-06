import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyACIbgWiFraLxo9bN_D5Y6hthT86oD2k1M',
      authDomain: 'auth-8adff.firebaseapp.com',
      databaseURL: 'https://auth-8adff.firebaseio.com',
      projectId: 'auth-8adff',
      storageBucket: 'auth-8adff.appspot.com',
      messagingSenderId: '1010407593011'
    });
  }


  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }

}

export default App;
