import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBUl7WsXV1MNEhxxa78y4VsHHXnXUgxW7w',
    authDomain: 'auth-a010.firebaseapp.com',
    databaseURL: 'https://auth-a010.firebaseio.com',
    projectId: 'auth-a010',
    storageBucket: '',
    messagingSenderId: '759251792141'
  });
  }

  render() {
    return (
      <View>
        <Header text={'Proyect 2'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
