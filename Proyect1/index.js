import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/Components/Header';
import List from './src/Components/List';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#eee' }}>
    <Header text={'Proyect 1'} />
    <List />
  </View>
);


AppRegistry.registerComponent('Proyect1', () => App);
