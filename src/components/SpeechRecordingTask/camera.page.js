import React, { Component } from 'react';
import * as Permissions from 'expo-permissions';
import {Camera} from 'expo-camera';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
//import saveData from './saveData';
import firebase from 'firebase';
import _ from 'lodash';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';


export default class ThreeCCam extends React.Component{
    camera = null;

    state = {
        captures: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
        text: 'Please Click the Recoding Button on the Bottom to begin.'
    };
    constructor(props) {
      super(props);
    this.text = this.text.bind(this);
    global.rand = 0;
  }

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    uploadImage = async ( uri ) => {
  const response = await fetch(uri);
  //const blob = await response.blob();
  const blob = await new Promise((resolve, reject) => {
const xhr = new XMLHttpRequest();
xhr.onload = function() {
  resolve(xhr.response);
};
xhr.onerror = function() {
  reject(new TypeError('Network request failed'));
};
xhr.responseType = 'blob';
xhr.open('GET', uri, true);
xhr.send(null);
});
  firebase.storage().ref('users/'+this.props.Patient+'/'+this.props.Date+'/SpeechTasks').child('SpeechRecordingTask.mp4').put(blob);
  console.log(blob);
}

handleLongCapture = async () => {
    const videoData = await this.camera.recordAsync();
    this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
};

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {

        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
        var min = 1;
        var max = 4;
        global.rand =  min + (Math.random() * (max-min));
    };

    text(){
      if(this.state.capturing && global.rand == 1){
        return(
        <Text style={{ fontSize: 18, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>Caterpillar Passage

Do you like amusement parks? Well, I sure do. To amuse myself, I went twice last spring. My most Memorable moment was riding on the Caterpillar, which is a gigantic roller coaster high above the ground. When I saw how high the Caterpillar rose into the bright blue sky I knew it was for me. After waiting in line for thirty minutes, I made it to the front where the man measured my height to see if I was tall enough. I gave the man my coins, asked for change, and jumped on the cart. Tick, tick, tick, the Caterpillar climbed slowly up the tracks. It went SO high I could see the parking lot. Boy was I SCARED! I thought to myself, “There’s no turning back now.” People were so scared they screamed as we swiftly zoomed fast, fast, and faster along the tracks. As quickly as it started, the Caterpillar came to a stop. Unfortunately, it was time to pack the car and drive home. That night I dreamt of the wild ride on the Caterpillar. Taking a trip to the amusement park and riding on the Caterpillar was my MOST memorable moment ever.</Text>
      )
      }
      if(this.state.capturing && global.rand == 2){
        return(
        <Text style={{ fontSize: 18, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>The North Wind and the Sun

The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other. Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him, and at last the North Wind gave up the attempt. Then the Sun shone out warmly, and immediately the traveler took off his cloak. And so the North Wind was obliged to confess that the Sun was the stronger of the two.</Text>
      )
      }
      if(this.state.capturing && global.rand == 3){
        return(
        <Text style={{ fontSize: 18, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>The Rainbow Passage
When the sunlight strikes raindrops in the air, they act as a prism and form a rainbow. The rainbow is a division of white light into many beautiful colors. These take the shape of a long round arch, with its path high above, and its two ends apparently beyond the horizon. There is, according to legend, a boiling pot of gold at one end. People look, but no one ever finds it. When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of rainbow. Throughout the centuries people have explained the rainbow in various ways. Some have accepted it as a miracle without physical explanation. To the Hebrews it was a token that there would be no more universal floods. The Greeks used to imagine that it was a sign from the gods to foretell war or heavy rain. The Norsemen considered the rainbow as a bridge over which the gods passed from earth to their home in the sky. Others have tried to explain the phenomenon physically. Aristotle thought that the rainbow was caused by reflection of the sun’s rays by the rain. Since then physicists have found that it is not reflection, but refraction by the raindrops which causes the rainbows. Many complicated ideas about the rainbow have been formed. The difference in the rainbow depends considerably upon the size of the drops, and the width of the colored band increases as the size of the drops increases. The actual primary rainbow observed is said to be the effect of super-imposition of a number of bows. If the red of the second bow falls upon the green of the first, the result is to give a bow with an abnormally wide yellow band, since red and green light when mixed forms yellow. This is very common type of bow, one showing mainly red and yellow, with little or no green or blue.</Text>
      )
      }
      if(this.state.capturing && global.rand == 4){
        return(
        <Text style={{ fontSize: 18, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>Grandfather Passage

You wish to know all about my grandfather. Well, he is nearly 93 years old, yet he still thinks as swiftly as ever. He dresses himself in an old black frock coat, usually several buttons missing. Along beard clings to his chin, giving those who observe him a pronounced feeling of the utmost respect. When he speaks, his voice is just a bit cracked and quivers a bit. Twice each day he plays skillfully and with zest upon a small organ. Except in the winter when the snow or ice prevents, he slowly takes a short walk in the open air each day. We have often urged him to walk more and smoke less, but he always answers, “Banana oil!” Grandfather likes to be modern in his language.</Text>
      )
      }
      else {
        return(
          <Text style={{ fontSize: 18, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>Please Click the Recoding Button on the Bottom to begin.</Text>
        )
      }
    }

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
            <ScrollView>
            {this.text()}
  <Text> {"\n"} </Text>
                <View>

                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>
                <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
</ScrollView>
                {captures.length > 0 && <Gallery captures={captures}/>}
                {captures.map(({ uri }) => (
                  this.uploadImage(uri),
                  console.log(uri)
                ))}
                <Toolbar
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};
