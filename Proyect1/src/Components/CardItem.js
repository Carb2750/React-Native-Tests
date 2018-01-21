import React from 'react';
import { View } from 'react-native';

const CardItem = (prop) => (
    <View style={styles.containerStyle}>
      {prop.children}
    </View>
  );

const styles = {
  containerStyle: {
  //  borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  //  borderColor: '#007aff',
    position: 'relative',
  }
};

export default CardItem;
