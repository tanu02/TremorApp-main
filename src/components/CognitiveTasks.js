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
  Spinner,
  ButtonGreen
} from './common';
import { Actions } from 'react-native-router-flux';
import Expo from 'expo';
import firebase from 'firebase';
import currentWeekNumber from 'current-week-number';

export default class CognitiveTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CognitiveTask: '',
      StroopTask: '',
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  publish1=()=>{
    Actions.CogDirections({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish2=()=>{
    Actions.StroopDirections({Date: this.props.Date, Patient: this.props.Patient, Section: 'FingerTasks'});
  }

  componentWillMount(){
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    var that = this;
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/CognitiveTask/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          CognitiveTask: 'There'
        })
      }
      else {
        console.log('not gelo')
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/StroopTask/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          StroopTask: 'There'
        })
      }
      else {
        console.log('not gelo')
      }
    });
}

renderButtonOne(){
  if (this.state.CognitiveTask == 'There'){
    return (
      <Card>
        <ButtonGreen onPress={this.publish1}>
          Cognitive Task
        </ButtonGreen>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <Button onPress={this.publish1}>
          Cognitive Task
        </Button>
      </Card>
    )
  }
}
renderButtonTwo(){
  if (this.state.StroopTask == 'There'){
    return (
      <Card>
        <ButtonGreen onPress={this.publish2}>
           Stroop Task
        </ButtonGreen>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <Button onPress={this.publish2}>
           Stroop Task
        </Button>
      </Card>
    )
  }
}
  render() {
    return (
      <ScrollView>
      {this.renderButtonOne()}
      {this.renderButtonTwo()}
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
