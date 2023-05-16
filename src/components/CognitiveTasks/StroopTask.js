import React from 'react';
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button } from '../common';
import currentWeekNumber from 'current-week-number';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class StroopTask extends React.Component {
  constructor(props) {
    super(props);
    const img1 = require('./1.png');
    const img2 = require('./2.png');
    const img3 = require('./3.png');
    const img4 = require('./4.png');
    const img5 = require('./5.png');
    const img6 = require('./6.png');
    const img7 = require('./7.png');
    const img8 = require('./8.png');
    const img9 = require('./9.png');
    const img10 = require('./10.png');
    const img11 = require('./11.png');
    const img12 = require('./12.png');
    const img13 = require('./13.png');
    const img14 = require('./14.png');
    const img15 = require('./15.png');
    const img16 = require('./16.png');
    const img17 = require('./17.png');
    const img18 = require('./18.png');
    const img19 = require('./19.png');
    const img20 = require('./20.png');
    const img21 = require('./21.png');
    const img22 = require('./22.png');
    const img23 = require('./23.png');
    const img24 = require('./24.png');
    const img25 = require('./25.png');
    const img26 = require('./26.png');
    const img27 = require('./27.png');
    const img28 = require('./28.png');
    const img29 = require('./29.png');
    const img30 = require('./30.png');
    const img31 = require('./31.png');
    const img32 = require('./32.png');
    const img33 = require('./33.png');
    const img34 = require('./34.png');
    const img35 = require('./35.png');
    this.renderObjects=this.renderObjects.bind(this)
    this.renderObjectsR=this.renderObjectsR.bind(this)
    this.renderObjectsY=this.renderObjectsY.bind(this)
    this.renderObjectsG=this.renderObjectsG.bind(this)
    this.renderObjectsO=this.renderObjectsO.bind(this)
    this.renderObjectsP=this.renderObjectsP.bind(this)
    this.componentDidMount=this.componentDidMount.bind(this)
    this.state = {
      correct: 0,
      wrong: 0,
      index: 0,
      imgList: [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35],
      directions: 'Please select the color shown below.',
      buttonText: 'Start',
       dire: 'Color'
    }
    global.rand = 0;
    this.renderButton = this.renderButton.bind(this);
    this.storeData = this.storeData.bind(this);
    this._toggle = this._toggle.bind(this);
  }

componentWillUnmount(){
  console.log(this.state.correct);
}

  renderObjectsR(){
    if (-1<this.state.index && this.state.index<4 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 8 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 15 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 21 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 26 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 34 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 4;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
  }

  renderObjectsO(){
    if (3<this.state.index && this.state.index<10 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 0 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 5 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 11 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 17 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 23 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 29 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 10;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
  }
  renderObjectsY(){
    if (9<this.state.index && this.state.index<16 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 1 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 6 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 12 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 18 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 24 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 30 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 1;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
  }
  renderObjectsG(){
    if (15<this.state.index && this.state.index<22 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });

  }
  if (this.state.index == 3 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 9 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 14 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 20 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 27 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 32 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 1;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
  }
  renderObjects(){
    if (21<this.state.index && this.state.index<28 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 2 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 7 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 13 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 19 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 25 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 31 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 1;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
  }
  renderObjectsP(){
    if (27<this.state.index && this.state.index<35 && this.state.directions == 'Please select the color shown below.'){
      this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 4 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 10 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 16 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 22 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 28 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  if (this.state.index == 33 && this.state.directions == 'Please select the shape shown below.')
  {
    this.setState({ correct: this.state.correct + 1 });
  }
  else{
    this.setState({ wrong: this.state.wrong + 1 });
  }
  var min = 1;
  var max = 35;
  global.rand =  min + (Math.random() * (max-min));
  var image = Math.round(global.rand)
  this.setState({
    index: image - 1
  })
}
componentDidMount(){
  var week = currentWeekNumber();
  if (week == 1 || week == 2 || week == 5 || week == 8 || week == 9 || week == 10 || week == 12 || week == 18 || week == 19 || week == 22 || week == 23 || week == 29 || week == 30 || week == 32 || week == 34 || week == 36 || week == 39 || week == 40 || week == 43 || week == 44 || week == 45 || week == 47 || week == 49 || week == 50 || week == 52 || week == 16){
    this.setState({
      directions: 'Please select the shape shown below.',
      dire: 'Shape'
    })
  }
  else {
    return null;
  }
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
 storeData(){
   firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/CognitiveTasks/StroopTask/Correct').set(this.state.correct);
   firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/CognitiveTasks/StroopTask/Wrong').set(this.state.wrong);
   var year = new Date().getFullYear();
     var week = currentWeekNumber();
   firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/StroopTask/State').set('Done');
   firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/CognitiveTasks/StroopTask/Task').set(this.state.dire);
   this.setState({
     buttonText: 'Redo'
   })
   Alert("The Testing is Complete!");
   console.log('reached')
 }
 renderImages(){
   if (this.state.buttonText == 'In Progress'){
     return (
       <View style={styles.container}>
       <TouchableOpacity onPress={this.renderObjects}>
         <Image
         source={require('./Blue.png')}
         style={styles.icon}
         />
      </TouchableOpacity>

      <TouchableOpacity onPress={this.renderObjectsP}>
           <Image
           source={require('./Purple.png')}
           style={styles.icon}
           />
      </TouchableOpacity>

           <TouchableOpacity onPress={this.renderObjectsY}>
             <Image
             source={require('./Yellow.png')}
             style={styles.icon}
             />
             </TouchableOpacity>
             </View>
     )
   }
   else {
     return null;
   }

 }
 renderImagesTwo(){
   if (this.state.buttonText == 'In Progress'){
     return (
             <View style={styles.container}>
             <TouchableOpacity onPress={this.renderObjectsR}>
               <Image
               source={require('./Red.png')}
               style={styles.icon}
               />
               </TouchableOpacity>
               <TouchableOpacity onPress={this.renderObjectsO}>
                 <Image
                 source={require('./Orange.png')}
                 style={styles.icon}
                 />
                 </TouchableOpacity>

                 <TouchableOpacity onPress={this.renderObjectsG}>
                   <Image
                   source={require('./Green.png')}
                   style={styles.icon}
                   />
                   </TouchableOpacity>
                   </View>
     )
   }
   else {
     return null;
   }

 }

  render() {
    console.log(this.state.directions)
    return (
      <View>
        <Text style={styles.Text}> {this.state.directions}</Text>
        <Image
        source={this.state.imgList[this.state.index]}
        style={styles.Image}
        />
        {this.renderButton()}
        {this.renderImages()}
        {this.renderImagesTwo()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topcontainer:{
    flex: 2,
    flexDirection: 'column'
  },
  container: {
    flex:  1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 120
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
    paddingBottom: 76,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 35,
    paddingRight: 30
  },
  Image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  icon: {
    width: 110,
    height: 110
  },
});
