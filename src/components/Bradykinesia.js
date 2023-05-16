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
  ButtonGreenLeft,
  ButtonLeft
} from './common';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import currentWeekNumber from 'current-week-number';

export default class Bradykinesia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RapidAlternatingMovement: '',
      DominantIndexFinger: '',
      DominantIndexMiddle: '',
      DualIndex: '',
      NonDominantIndexFinger: '',
      NonDominantIndexMiddle: ''
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  publish=()=>{
    Actions.RapidAlternatingMovement({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish1=()=>{
    Actions.DominantIndexMiddle({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish2=()=>{
    Actions.NonDominantIndexMiddle({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish3=()=>{
    Actions.DualIndex({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish4=()=>{
    Actions.DominantIndexFinger({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }
  publish5=()=>{
    Actions.NonDominantIndexFinger({Date: this.props.Date, Patient: this.props.Patient, Section: 'TremorTasks'});
  }

  componentWillMount(){
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    var that = this;
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/RapidAlternatingMovement/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          RapidAlternatingMovement: 'There'
        })
      }
      else {
        console.log('not gelo')
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
        console.log('not gelo')
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
        console.log('not gelo')
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
        console.log('not gelo')
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
        console.log('not gelo')
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
        console.log('not gelo')
      }
    });
  }

  renderButtonZero(){
    if (this.state.RapidAlternatingMovement == 'There'){
      return (
        <Card>
          <ButtonGreenLeft onPress={this.publish}>
            Rapid Alternating Movement
          </ButtonGreenLeft>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <ButtonLeft onPress={this.publish}>
            Rapid Alternating Movement
          </ButtonLeft>
        </Card>
      )
    }
  }
renderButtonOne(){
  if (this.state.DominantIndexMiddle == 'There'){
    return (
      <Card>
        <ButtonGreenLeft onPress={this.publish1}>
          Dominant Index- Middle Finger Tapping Task
        </ButtonGreenLeft>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <ButtonLeft onPress={this.publish1}>
          Dominant Index- Middle Finger Tapping Task
        </ButtonLeft>
      </Card>
    )
  }
}
renderButtonTwo(){
  if (this.state.NonDominantIndexMiddle == 'There'){
    return (
      <Card>
        <ButtonGreenLeft onPress={this.publish2}>
           Non-Dominant Index-Middle Finger Tapping Task
        </ButtonGreenLeft>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <ButtonLeft onPress={this.publish2}>
           Non-Dominant Index-Middle Finger Tapping Task
        </ButtonLeft>
      </Card>
    )
  }
}
renderButtonThree(){
  if (this.state.DualIndex == 'There'){
    return (
      <Card>
        <ButtonGreenLeft onPress={this.publish3}>
          Dual Index Fingers Tapping Task
        </ButtonGreenLeft>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <ButtonLeft onPress={this.publish3}>
          Dual Index Fingers Tapping Task
        </ButtonLeft>
      </Card>
    )
  }
}
renderButtonFour(){
  if (this.state.DominantIndexFinger == 'There'){
    return (
      <Card>
        <ButtonGreenLeft onPress={this.publish4}>
          Dominant Index Finger Tapping Task
        </ButtonGreenLeft>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <ButtonLeft onPress={this.publish4}>
          Dominant Index Finger Tapping Task
        </ButtonLeft>
      </Card>
    )
  }
}
renderButtonFive(){
  if (this.state.NonDominantIndexFinger == 'There'){
    return (
      <Card>
        <ButtonGreenLeft onPress={this.publish5}>
          Non-Dominant Index Finger Tapping Task
        </ButtonGreenLeft>
      </Card>
    )
  }
  else {
    return (
      <Card>
        <ButtonLeft onPress={this.publish5}>
          Non-Dominant Index Finger Tapping Task
        </ButtonLeft>
      </Card>
    )
  }
}

  render() {
    return (
      <ScrollView>
      {this.renderButtonZero()}
      {this.renderButtonOne()}
      {this.renderButtonTwo()}
      {this.renderButtonThree()}
      {this.renderButtonFour()}
      {this.renderButtonFive()}
        <Text> {"\n"}{"\n"} </Text>
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
