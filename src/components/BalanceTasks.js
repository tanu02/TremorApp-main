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


export default class BalanceTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FeetTogetherBalance: '',
      TandemStanceBalance: '',
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount(){
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    var that = this;
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/BalanceTasks/FeetTogetherBalance/State')
    .once('value', function(snapshot) {
      if (snapshot.exists()) {
        that.setState({
          FeetTogetherBalance: 'There'
        })
      }
      else {
        console.log('not gelo')
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
        console.log('not gelo')
      }
    });
  }

  publish=()=>{
    Actions.FeetTogetherBalance({Date: this.props.Date, Patient: this.props.Patient});
  }
  publish1=()=>{
    Actions.TandemStanceBalance({Date: this.props.Date, Patient: this.props.Patient});
  }

  renderButtonOne(){
    if (this.state.FeetTogetherBalance == 'There'){
      return(
      <Card>
        <ButtonGreen onPress={this.publish}>
          Feet Together Balance Task
        </ButtonGreen>
      </Card>
      )
    }
    else {
      return(
      <Card>
        <Button onPress={this.publish}>
          Feet Together Balance Task
        </Button>
      </Card>
    )
    }
  }

  renderButtonTwo(){
    if (this.state.TandemStanceBalance == 'There'){
      return (
        <Card>
          <ButtonGreen onPress={this.publish1}>
             Tandem Stance Balance Task
          </ButtonGreen>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <Button onPress={this.publish1}>
             Tandem Stance Balance Task
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
