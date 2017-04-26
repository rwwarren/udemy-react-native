import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDVn3mS26o3XZT9AhItR4qbVA-uIWoGVC4',
      authDomain: 'manager-4e718.firebaseapp.com',
      databaseURL: 'https://manager-4e718.firebaseio.com',
      projectId: 'manager-4e718',
      storageBucket: 'manager-4e718.appspot.com',
      messagingSenderId: '462850782651'
    };
    firebase.initializeApp(config);
  }

  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
