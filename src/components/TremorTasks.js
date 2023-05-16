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

export default class TremorTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestTremor: '',
      PosturalTremor: '',
      IntentionTremor: '',
      KineticTremor: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  publish=()=>{
    Actions.RestTremor({Date: this.props.Date, Patient: this.props.Patient});
  }
  publish1=()=>{
    Actions.PosturalTremor({Date: this.props.Date, Patient: this.props.Patient});
  }
  publish2=()=>{
    Actions.IntentionTremor({Date: this.props.Date, Patient: this.props.Patient});
  }
  publish3=()=>{
    Actions.KineticTremor({Date: this.props.Date, Patient: this.props.Patient});
  }

  componentDidMount(){
    console.log(this.props.Patient)
    console.log(this.props.Date)
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    var that = this;
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/TremorTask/RestTremor/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          RestTremor: 'There'
        })
        console.log('there')
      }
      else {
        console.log('not gelo')
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
        console.log('not gelo')
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
        console.log('not gelo')
      }
    });
  }

  renderButtonOne(){
    if (this.state.RestTremor == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish}>
             Rest Tremor Task
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish}>
             Rest Tremor Task
          </Button>
        </Card>
      )
    }
  }
  renderButtonTwo(){
    if (this.state.PosturalTremor == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish1}>
             Postural Tremor Task
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish1}>
             Postural Tremor Task
          </Button>
        </Card>
      )
    }
  }
  renderButtonThree(){
    if (this.state.IntentionTremor == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish2}>
            Intention Tremor Task
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish2}>
            Intention Tremor Task
          </Button>
        </Card>
      )
    }
  }
  renderButtonFour(){
    if (this.state.KineticTremor == 'There'){
      return(
          <Card>
            <ButtonGreen onPress={this.publish3}>
              Kinetic Tremor Task
            </ButtonGreen>
          </Card>
        )
    }
    else {
    return(
        <Card>
          <Button onPress={this.publish3}>
            Kinetic Tremor Task
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
