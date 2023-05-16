import React, { Component } from 'react';
import ChatApp from './src/App.js';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { Scene, Actions, Router } from 'react-native-router-flux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {

  render() {
    return (
      <ChatApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// import { withAuthenticator } from 'aws-amplify-react-native'
//
// import Amplify from '@aws-amplify/core'
// import config from './aws-exports'
// Amplify.configure(config)
//
// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Yo!</Text>
//       </View>
//     );
//   }
// }
//
// export default withAuthenticator(App, { includeGreetings: true })
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
