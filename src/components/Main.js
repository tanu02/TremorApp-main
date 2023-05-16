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
import firebase from 'firebase';
import currentWeekNumber from 'current-week-number';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MedicalHistory: '',
      TremorTasks: '',
      Bradykinesia: '',
      BalanceTasks: '',
      GaitTasks: '',
      SpeechTasks: '',
      CognitiveTasks: '',
      currentUser: null
    };
    global.Me = '';
    global.endTime = 0;
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  publish=()=>{
    Actions.MedicalHistory({Date: this.props.Date, Patient: this.props.Patient, Section: 'MedicalHistory'});
  }
  publish1=()=>{
    Actions.TremorTasks({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish2=()=>{
    Actions.Bradykinesia({Date: this.props.Date, Patient: this.props.Patient, Section: 'FingerTasks'});
  }
  publish3=()=>{
    Actions.BalanceTasks({Date: this.props.Date, Patient: this.props.Patient, Section: 'BalanceTasks'});
  }
  publish4=()=>{
    Actions.GaitTasks({Date: this.props.Date, Patient: this.props.Patient, Section: 'GaitTasks'});
  }
  publish5=()=>{
    Actions.SpeechTasks({Date: this.props.Date, Patient: this.props.Patient, Section: 'SpeechTasks'});
  }
  publish6=()=>{
    Actions.CognitiveTasks({Date: this.props.Date, Patient: this.props.Patient, Section: 'CognitiveTasks'});
  }
  publish7=()=>{
    Actions.Watch({Date: this.props.Date, Patient: this.props.Patient, Section: 'CognitiveTasks'});
  }
  componentDidMount(){
    global.endTime = new Date();
    var timeDiff = global.endTime - this.props.Time; //in ms
    console.log(timeDiff)
    console.log('timeDiff')
    console.log(global.endTime)
    console.log(this.props.Time)
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    var that = this;
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/MedicalHistory/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          MedicalHistory: 'There'
        })
      }
      else {
        console.log('not gelo')
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/TremorTask/IntentionTremor/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          IntentionTremor: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/TremorTask/KineticTremor/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          KineticTremor: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/TremorTask/RestTremor/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          RestTremor: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/TremorTask/PosturalTremor/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          PosturalTremor: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/RapidAlternatingMovement/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          RapidAlternatingMovement: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/NonDominantIndexFinger/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          NonDominantIndexFinger: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/DominantIndexFinger/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          DominantIndexFinger: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/DualIndex/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          DualIndex: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/DominantIndexMiddle/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          DominantIndexMiddle: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/NonDominantIndexMiddle/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          NonDominantIndexMiddle: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/GaitTasks/NormalGait/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          NormalGait: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/GaitTasks/TandemGait/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          TandemGait: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/BalanceTasks/FeetTogetherBalance/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          FeetTogetherBalance: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/BalanceTasks/TandemStanceBalance/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          TandemStanceBalance: 'There'
        })
      }
      else {
        return null;
      }
    });
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/CognitiveTask/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          CognitiveTask: 'There'
        })
      }
      else {
        return null;
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
        return null;
      }
    });
  }
  renderButtonOne(){
    if (this.state.MedicalHistory == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish}>
            Medical History
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish}>
            Medical History
          </Button>
        </Card>
      )
    }
  }
  renderButtonTwo(){
    if (this.state.IntentionTremor == 'There' && this.state.RestTremor == 'There' && this.state.PosturalTremor == 'There' && this.state.KineticTremor == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish1}>
             Tremor Tasks
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish1}>
             Tremor Tasks
          </Button>
        </Card>
      )
    }
  }
  renderButtonThree(){
    if (this.state.DominantIndexFinger == 'There' && this.state.NonDominantIndexFinger == 'There' && this.state.NonDominantIndexMiddle == 'There' && this.state.DominantIndexMiddle == 'There' && this.state.RapidAlternatingMovement == 'There' && this.state.DualIndex == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish2}>
            Bradykinesia
        </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish2}>
            Bradykinesia
          </Button>
        </Card>
      )
    }
  }
  renderButtonFour(){
    if (this.state.FeetTogetherBalance == 'There' && this.state.TandemStanceBalance == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish3}>
            Balance Tasks
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish3}>
            Balance Tasks
          </Button>
        </Card>
      )
    }
  }
  renderButtonFive(){
    if (this.state.NormalGait == 'There' && this.state.TandemGait == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish4}>
            Gait Tasks
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish4}>
            Gait Tasks
          </Button>
        </Card>
      )
    }
  }
  renderButtonSix(){
    if (this.state.SpeechTasks == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish5}>
            Speech Tasks
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish5}>
            Speech Tasks
          </Button>
        </Card>
      )
    }
  }
  renderButtonSeven(){
    if (this.state.CognitiveTask == 'There' && this.state.StroopTask == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish6}>
            Cognitive Tasks
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish6}>
            Cognitive Tasks
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
      {this.renderButtonThree()}
      {this.renderButtonFour()}
      {this.renderButtonFive()}
      {this.renderButtonSix()}
      {this.renderButtonSeven()}
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
