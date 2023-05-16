import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ScrollView,
  FlatList,
  Alert,
  AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from './common';
import { Actions } from 'react-native-router-flux';
import Expo from 'expo';
import firebase from 'firebase';
import currentWeekNumber from 'current-week-number';

export default class CreateAnAccount extends Component {
  constructor(props) {
    super(props);
      this.state ={
        Patient: 'Null',
        email: '',
        Date: '',
        password: '',
        errorMessage: null
      }
      global.Me = '';
    }

    _storeData = async () => {
      const { email, password, Patient, Date } = this.state
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      global.Me = currentUser.uid
      console.log(global.Me)
  Actions.Consent({Patient: global.Me, Date: Date })
};
    handleSignUp = () => {
      const { email, password, Patient, Date } = this.state
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this._storeData())
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    componentDidMount() {
      var that = this;
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var week = currentWeekNumber();
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      console.log()
      that.setState({
        Date:
        year + '/' + week + '/' + date + '/' + month + '-' + date + '/' + hours + ':' + min
      });
    }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Card>
          <CardSection>
            <Text style={{ fontSize: 27, fontWeight: 'bold', paddingTop: 15, paddingLeft: 15, paddingBottom: 15 }}> Please create an account by filling out the information below.</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Input
              type="text"
              label="Email:"
              placeholder="example@gmail.com"
              onChangeText={
                email => this.setState({email})
              }
              value={this.state.email}
            />
          </CardSection>
        </Card>
          <Card>
            <CardSection>
              <Input
              secureTextEntry
                type="text"
                label="Password:"
                placeholder="Password"
                onChangeText={
                  password => this.setState({password})
                }
                value={this.state.password}
              />
            </CardSection>
          </Card>
          {this.state.errorMessage &&
            <Text style={{ color: 'red', fontSize: 22, paddingLeft: 15, paddingTop: 15, paddingBottom: 10, paddingRight: 15 }}>
              {this.state.errorMessage}
            </Text>}
          <Card>
            <Button onPress={this.handleSignUp}>
              Create Account
            </Button>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
    color: '#B22222',
    fontWeight: '800',
  },
  highlight: {
    backgroundColor: '#B22222',
  },
  button: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
  pickerTextStyle: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
});
