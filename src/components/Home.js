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
  Alert
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

export default class Home extends Component {
  constructor(props) {
    super(props);
      this.state ={
        Patient: '',
        Date: '',
        Email: '',
        errorMessage: null,
        Hello: ''
      }
      global.Me = '';
      global.startTimeRed = 0;
    }

    Time(){
      global.startTimeRed = new Date();
    }
    Login(){
      this.Time()
      const { Email, Patient, Hello, Date } = this.state
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      global.Me = currentUser.uid
      console.log(global.Me)
        Actions.Main({ Date: this.state.Date, Patient: global.Me, Section: 'MedicalHistory', Time: global.startTimeRed });
    }

    forgotPassword = () => {
      Actions.ForgotPasscode();
  }
    handleLogin = () => {
      const { Email, Patient, Hello, Date } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(Email, Patient)
        .then(() => this.Login())
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

  renderError(){
    if (this.state.errorMessage == ''){
      return null;
    }
    else {
      return (
        <Card>
        <CardSection>
        {this.state.errorMessage &&
          <Text style={{ color: 'red', fontSize: 22 }}>
            {this.state.errorMessage}
          </Text>}
          </CardSection>
          </Card>
      )
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Card>
          <CardSection>
            <Input
              type="Email"
              label="Email:"
              placeholder="example@gmail.com"
              onChangeText={
                Email => this.setState({Email})
              }
              value={this.state.Email}
            />
          </CardSection>
            <CardSection>
              <Input
              secureTextEntry
                type="password"
                label="Password:"
                placeholder="Password"
                onChangeText={
                  Patient => this.setState({Patient})
                }
                value={this.state.Patient}
              />
            </CardSection>
          </Card>
          <TouchableOpacity style={{fontSize: 20, paddingLeft: 15, paddingTop: 15, paddingBottom: 10, paddingRight: 15, color: 'blue' }} onPress={this.forgotPassword}>
          <Text style={{fontSize: 20, color: '#007AFF'}}>Fogot Passcode?</Text>
          </TouchableOpacity>
          {this.state.errorMessage &&
            <Text style={{ color: 'red', fontSize: 22, paddingLeft: 15, paddingTop: 15, paddingBottom: 10, paddingRight: 15 }}>
              {this.state.errorMessage}
            </Text>}
          <Card>
            <Button onPress={this.handleLogin}>
              Next
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

// <Text> {"\n"} {"\n"}</Text>
// <Text style={{ paddingLeft: 10, fontSize: 27, fontWeight: 'bold'}}> Don't have an account?</Text>
// <Card>
//   <Button onPress={this.publish1}>
//     Create An Account
//   </Button>
// </Card>
