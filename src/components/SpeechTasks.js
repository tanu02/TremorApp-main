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
  Image
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

export default class SpeechTasks extends Component {
  publish=()=>{
    Actions.EnunciationTask({Date: this.props.Date, Patient: this.props.Patient, Section: 'MedicalHistory'});
  }
  publish1=()=>{
    Actions.SpeechRecordingTask({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  render() {
    return (
      <ScrollView>
        <Card>
          <Button onPress={this.publish}>
            Enunciation Task
          </Button>
        </Card>
        <Card>
          <Button onPress={this.publish1}>
             Speech Recording Task
          </Button>
        </Card>
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
