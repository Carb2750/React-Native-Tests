import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureText }) => {
const { inputStyle, labelStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureText}
        underlineColorAndroid='transparent'
        placeholder={placeHolder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export { Input };
