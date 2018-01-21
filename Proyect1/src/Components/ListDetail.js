import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const ListDetail = ({ data }) => {
  const { title, category, portrait, url } = data;

  return (
    <Card>
      <CardItem>
        <View style={styles.viewStyle}>
          <Text style={styles.textTitleStyle}>{title}</Text>
          <Text style={styles.textDescription}>{category}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image style={styles.imageCardStyle} source={{ uri: portrait }} />
      </CardItem>
      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>
          Watch
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textTitleStyle: {
    color: '#000000',
    fontSize: 18
  },
  textDescription: {
    alignSelf: 'center'
  },
  viewContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageCardStyle: {
    height: 300,
    flex: 1,
    width: null,
    borderWidth: 1,
    borderColor: '#007aff'
  },
};

export default ListDetail;
