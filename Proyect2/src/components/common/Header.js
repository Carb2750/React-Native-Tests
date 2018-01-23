import React from 'react';
import { Text, View } from 'react-native';

const Header = (prop) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{prop.text}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F2F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    shadowColor: '#0000FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 18,
    color: '#000000'
  }
};

export { Header };
