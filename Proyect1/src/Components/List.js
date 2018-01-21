import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ListDetail from './ListDetail';
import data from './AnimeInfo.json';

class List extends Component {
  state = { lists: [] };

  componentWillMount() {
    this.setState({ lists: data });
  }

renderList() {
    return this.state.lists.map(list => <ListDetail key={list.title} data={list} />);
}

  render() {
  return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }
}

export default List;
