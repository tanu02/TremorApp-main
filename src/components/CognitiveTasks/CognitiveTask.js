import React, { Component } from 'react';
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ScrollView, Alert } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button } from '../common';
import { PanGestureHandler, TapGestureHandler,
State, } from 'react-native-gesture-handler';
const screenWidth = Math.round(Dimensions.get('window').width);
import currentWeekNumber from 'current-week-number';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class CognitiveTask extends Component {
  constructor(props) {
    super(props);
    const img1 = require('./50.png');
    const img2 = require('./51.png');
    const img3 = require('./52.png');
    const img4 = require('./53.png');
    const img5 = require('./54.png');
    const img6 = require('./55.png');
    this.state = {
      correct: 0,
      wrong: 0,
      index: 2,
      imgList: [img1,img2,img3,img4,img5,img6],
      buttonText: 'Start'
    }
    this._toggle = this._toggle.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressOne = this.onPressOne.bind(this);
    this.onPressTwo = this.onPressTwo.bind(this);
    this.onPressThree = this.onPressThree.bind(this);
    this.onPressFour = this.onPressFour.bind(this);
    this.onPressFive = this.onPressFive.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  componentWillUnmount(){
    console.log(this.state.correct);
    console.log(this.state.wrong);
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

  storeData(){
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/CognitiveTasks/CognitiveTask/Correct').set(this.state.correct);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/CognitiveTasks/CognitiveTask/Wrong').set(this.state.wrong);
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/CognitiveTask/State').set('Done');
    this.setState({
      buttonText: 'Redo'
    })
    Alert("The Testing is Complete!");
    console.log('reached')
  }

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

  renderItems(){
    if (this.state.buttonText == 'In Progress')
    return(
      <View style={{ flex: 1}}>
      <Image
      source={this.state.imgList[this.state.index]}
      style={styles.Image}
      />

    <TouchableOpacity onPress={this.onPress}>
    <Animated.View style={{
      width:(screenWidth/6) - (screenWidth/50),height:(screenWidth/6) - (screenWidth/50),
      borderRadius:0,
      backgroundColor:"#75FA4B",
      position:"absolute",
      left: 0,
      bottom: 0*screenWidth/6
  }}/>
  </TouchableOpacity>
  </View>
)
  }
  renderItemsTwo(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={this.onPressOne}>
      <Animated.View style={{
        width:(screenWidth/6) - (screenWidth/50),height:(screenWidth/6) - (screenWidth/50),
        borderRadius:0,
        backgroundColor:"red",
        position:"absolute",
        left: screenWidth/6,
        bottom: 0*screenWidth/6
      }}/>
      </TouchableOpacity>
)
  }
  renderItemsThree(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={this.onPressTwo}>
      <Animated.View style={{
        width:(screenWidth/6) - (screenWidth/50),height:(screenWidth/6) - (screenWidth/50),
        borderRadius:0,
        backgroundColor:"orange",
        position:"absolute",
        left: 2*screenWidth/6,
        bottom: 0*screenWidth/6
      }}/>
      </TouchableOpacity>
)
  }
  renderItemsFour(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={this.onPressThree}>
      <Animated.View style={{
        width:(screenWidth/6) - (screenWidth/50),height:(screenWidth/6) - (screenWidth/50),
        borderRadius:0,
        backgroundColor:"yellow",
        position:"absolute",
        left: 3*screenWidth/6,
        bottom: 0*screenWidth/6
      }}/>
      </TouchableOpacity>
)
  }
  renderItemsFive(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={this.onPressFour}>
      <Animated.View style={{
        width:(screenWidth/6) - (screenWidth/50),height:(screenWidth/6) - (screenWidth/50),
        borderRadius:0,
        backgroundColor:"purple",
        position:"absolute",
        left: 4*screenWidth/6,
        bottom: 0,
      }}/>
      </TouchableOpacity>
)
  }
  renderItemsSix(){
    if (this.state.buttonText == 'In Progress')
    return(
      <TouchableOpacity onPress={this.onPressFive}>
      <Animated.View style={{
        width:(screenWidth/6) - (screenWidth/50),
        height:(screenWidth/6) - (screenWidth/50),
        borderRadius:0,
        backgroundColor:'blue',
        position:"absolute",
        left: 5*screenWidth/6,
        bottom: 0,
      }}/>
      </TouchableOpacity>
)
  }

  onPress(){
    if (this.state.index == 4){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 4){
      this.setState({
        index: 3
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  onPressOne(){
    if (this.state.index == 1){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 1){
      this.setState({
        index: 0
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  onPressTwo(){
    if (this.state.index == 0){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 0){
      this.setState({
        index: 5
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  onPressThree(){
    if (this.state.index == 3){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 3){
      this.setState({
        index: 2
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  onPressFour(){
    if (this.state.index == 2){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 2){
      this.setState({
        index: 1
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  onPressFive(){
    if (this.state.index == 5){
      this.setState({ correct: this.state.correct + 1 });
    }
    else {
      this.setState({ wrong: this.state.wrong + 1 });
    }
    var min = 0;
    var max = 5;
    imager =  min + (Math.random() * (max-min));
    var image = Math.round(imager)
    if (image == 5){
      this.setState({
        index: 4
      })
    }
    else {
    this.setState({
      index: image
    })
  }
  }
  render() {
    return (
      <ScrollView>
      <Animated.View style={{
        width:screenWidth/6,height:screenWidth/6,
        borderRadius:0,
        backgroundColor:'#75FA4B',
        position:"absolute",
        left: 0,
        top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"red",
      position:"absolute",
      left: screenWidth/6,
      top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"orange",
      position:"absolute",
      left: 2*screenWidth/6,
      top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"yellow",
      position:"absolute",
      left: 3*screenWidth/6,
      top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"purple",
      position:"absolute",
      left: 4*screenWidth/6,
      top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"blue",
      position:"absolute",
      left: 5*screenWidth/6,
      top: 0
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:0,
      backgroundColor:"black",
      position:"absolute",
      left: 2*screenWidth/6,
      top: (60+screenWidth)/6
    }}/>
    <Animated.View style={{
      width:screenWidth/6,height:screenWidth/6,
      borderRadius:screenWidth/6,
      backgroundColor:"black",
      position:"absolute",
      left: 0,
      top: (60+screenWidth)/6
    }}/>
    <Animated.View style={{
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: screenWidth/12,
      borderRightWidth: screenWidth/12,
      borderBottomWidth: screenWidth/6,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      position:"absolute",
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black',
      left: 3*screenWidth/6,
      top: (60+screenWidth)/6
    }}/>
    <Animated.View style={{
      width: screenWidth/6,
      height: screenWidth/6,
      borderBottomWidth: screenWidth/6,
      borderBottomColor: 'black',
      borderLeftWidth: screenWidth/24,
      borderLeftColor: 'transparent',
      borderRightWidth: screenWidth/24,
      borderRightColor: 'transparent',
      borderStyle: 'solid',
      position:"absolute",
      left: 5*screenWidth/6,
      top: (60+screenWidth)/6
    }}/>
    <Animated.View style={{
      position: 'absolute',
    height: 0,
    width: 0,
    top: (60+screenWidth/6)-(35*screenWidth/308),
    left: screenWidth/6,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 35*screenWidth/540,
    borderLeftColor: 'transparent',
    borderLeftWidth: screenWidth/12,
    borderRightColor: 'transparent',
    borderRightWidth: screenWidth/12,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    }}/>
    <Animated.View style={{
      top: (60+screenWidth/6)-(35*screenWidth/720),
      left: screenWidth/6,
      width: screenWidth/6,
    borderBottomColor: 'black',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: screenWidth/30,
    borderRightColor: 'transparent',
    borderRightWidth: screenWidth/30,
    borderTopColor: 'black',
    borderTopWidth: 5*screenWidth/54
    }}/>
    <Animated.View style={{
      width:screenWidth/6,
      height:55*screenWidth/600,
      backgroundColor:"black",
      position:"absolute",
      left: 4*screenWidth/6,
      top: (60+screenWidth)/6+((screenWidth)/24)
    }}/>
    <Animated.View style={{
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: screenWidth/12,
    borderLeftColor: 'transparent',
    borderRightWidth: screenWidth/12,
    borderRightColor: 'transparent',
    borderTopWidth: screenWidth/24,
    borderTopColor: 'black',
      position:"absolute",
      left: 4*screenWidth/6,
      top: ((60+screenWidth)/6)+((screenWidth)/11)+((screenWidth)/24)
    }}/>
    <Animated.View style={{
      position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: screenWidth/12,
    borderLeftColor: 'transparent',
    borderRightWidth: screenWidth/12,
    borderRightColor: 'transparent',
    borderBottomWidth: screenWidth/24,
    borderBottomColor: 'black',
    left: 4*screenWidth/6,
    top: ((60+screenWidth)/6)-((screenWidth)/24)+((screenWidth)/24)
    }}/>
    {this.renderItems()}
    {this.renderItemsTwo()}
    {this.renderItemsThree()}
    {this.renderItemsFour()}
    {this.renderItemsFive()}
    {this.renderItemsSix()}
    <View style={{paddingTop: 200}}>
    {this.renderButton()}
    </View>
  </ScrollView>
    );
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
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    paddingTop: 9*screenWidth/6,
  },
  square: {
    width: screenWidth/6,
    height: screenWidth/6,
    backgroundColor: 'black',
}
});
