import React, { Component } from 'react';
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ScrollView, Alert, PanResponder, Vibration } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button } from '../common';
import { PanGestureHandler, TapGestureHandler,
State, } from 'react-native-gesture-handler';
const screenWidth = Math.round(Dimensions.get('window').width);
import currentWeekNumber from 'current-week-number';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const DURATION = 1000;

export default class DominantIndexFinger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: 0,
      wrong: 0,
      index: 2,
      buttonText: 'Start'
    }
    this.renderButton = this.renderButton.bind(this);
    this._toggle = this._toggle.bind(this);
    global.myArray=[]
    global.myArra=[]
    global.endTime = 0
    global.startTime = 0
    global.endTim = 0
    global.startTim = 0
    global.XYGreen = []
    global.XYRed = []
  }
  _toggle(){
    if (this.state.buttonText == 'Start'){
    this.setState({
      buttonText: 'In Progress'
    })
  }
  if (this.state.buttonText == 'Redo'){
    this.setState({
      buttonText: 'In Progress',
      correct: 0,
      wrong: 0,
    })
  }
}
  _onPanGestureEvent(){
    console.log("hjfjkh")
};

  renderButton(){
    if (this.state.buttonText == 'Start'){
      return(
      <Card>
        <Button onPress={this._toggle}>
          {this.state.buttonText}
          </Button>
      </Card>
    )
    }
    if (this.state.buttonText == 'Redo'){
      return(
      <Card>
        <Button onPress={this._toggle}>
          {this.state.buttonText}
          </Button>
      </Card>
    )
    }
    else {
  sleep(45000).then(() => {
    this.storeData();
  })
    }
  }
  onPressFour(e){
    global.endTime = new Date();
  var timeDiff = global.endTime - global.startTime;
  global.myArray.push(timeDiff)
  global.startTime = new Date();
  global.XYRed.push('x:' + e.nativeEvent.locationX + ', y:' + e.nativeEvent.locationY)
  }
  onPressFive(e){
    global.endTim = new Date();
  var timeDiff = global.endTim - global.startTim;
  global.myArra.push(timeDiff)
    global.startTim = new Date();
    global.XYGreen.push('x:' + e.nativeEvent.locationX + ', y:' + e.nativeEvent.locationY)
  }
  storeData(){
    Vibration.vibrate(DURATION);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/Bradykinesia/DominantIndexFinger/Red/Time').set(global.myArray);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/Bradykinesia/DominantIndexFinger/Green/Time').set(global.myArra);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/Bradykinesia/DominantIndexFinger/Red/Position').set(global.XYRed);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/Bradykinesia/DominantIndexFinger/Green/Position').set(global.XYGreen);
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/Bradykinesia/DominantIndexFinger/State').set('Done');
    this.setState({
      buttonText: 'Redo'
    })
    Alert("The Testing is Complete!");
    console.log('reached')
  }

  renderItemsFive(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={(e) => {this.onPressFour(e)}}>
      <Animated.View style={{
        width:125,height:125,
        borderRadius:125,
        backgroundColor:"red",
        position:"absolute",
        left: 0.5*screenWidth/6,
        top: 100,
      }}/>
      </TouchableOpacity>
)
  }

  componentWillUnmount(){
    if (this.state.buttonText == 'In Progress'){
      Vibration.vibrate(DURATION);
      Alert.alert("Warning: You have not finished testing! Please redo the testing.")
    }
    else {
      console.log('Done')
    }
  }
  renderItemsSix(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={(e) => {this.onPressFive(e)}}>
      <Animated.View style={{
        width:125,height:125,
        borderRadius:125,
        backgroundColor:'green',
        position:"absolute",
        left: 3.5*screenWidth/6,
        top: 100,
      }}/>
      </TouchableOpacity>
)
  }
  render() {
    return (
      <ScrollView>
      {this.renderItemsFive()}
      {this.renderItemsSix()}
      {this.renderButton()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  Text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 18
  },
  Image: {
    alignSelf: 'center',
    width: "100%",
    resizeMode: "contain"
  }
});
