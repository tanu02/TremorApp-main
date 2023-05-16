//Importing Libraries from React Native and My Other Components
import React from 'react';
import { View } from 'react-native';

//This makes the CardSection Reusable witha myriad of different combinationf to use this
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

//This code styles the object
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
