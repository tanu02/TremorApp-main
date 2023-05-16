//Importing Libraries from React Native and My Other Components
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//This a common Component Button
const ButtonGreenLeft = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
//The top allows you to declare all the following features with buttonStyle, which makes it reusable.

//The bottom styles the button in a way that is stylish

const styles = {
  textStyle: {
    alignSelf: 'flex-start',
    color: '#008000',
    fontSize: 35,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#008000',
    marginLeft: 5,
    marginRight: 5
  }
};

export { ButtonGreenLeft };
