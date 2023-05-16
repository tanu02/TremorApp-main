//Importing Libraries from React Native and My Other Components
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//This is when teh user is waiting for a component to load
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'}/>
    </View>
  );
}

//Additional Formatting
const styles ={
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
