import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from 'Router';

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

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
