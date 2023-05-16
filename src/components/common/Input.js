//Importing Libraries from React Native and My Other Components
import React from 'react';
import { TextInput, View, Text } from 'react-native';

//This is a Input with many features like secure Text Entry and place holder
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};


//This adjust the styling of the Component
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 23,
    lineHeight: 28,
    flex: 2
  },
  labelStyle:{
    fontSize: 23,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle:{
    height: 65,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
