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

export default class ForgotPasscode extends Component {
  constructor(props) {
    super(props);
      this.state ={
        Patient: '',
        Date: '',
        Email: '',
        errorMessage: null,
        Hello: ''
      }
    }

    button(){
      Alert.alert("Email Has Been Sent!");
      Actions.home();
    }

    forgotPassword = () => {
    const { Email, Patient } = this.state
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(() => this.button())
      .catch(error => this.setState({ errorMessage: error.message }))
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
            <Text style={{ fontSize: 27, fontWeight: 'bold', paddingTop: 15, paddingLeft: 15, paddingBottom: 15 }}> Please enter your email below, and we will send an email to reset your password.</Text>
          </CardSection>
        </Card>
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
          </Card>
          {this.state.errorMessage &&
            <Text style={{ color: 'red', fontSize: 22, paddingLeft: 15, paddingTop: 15, paddingBottom: 10, paddingRight: 15 }}>
              {this.state.errorMessage}
            </Text>}
          <Card>
            <Button onPress={this.forgotPassword}>
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
