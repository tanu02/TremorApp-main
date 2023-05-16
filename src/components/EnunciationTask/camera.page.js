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


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class ThreeCCam extends React.Component{
    camera = null;

    state = {
        captures: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.front,
        flashMode: Camera.Constants.FlashMode.off,
        text: ''
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    uploadImage = async ( uri ) => {
  const response = await fetch(uri);
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
  firebase.storage().ref('users/'+this.props.Patient+'/'+this.props.Date+'/SpeechTasks').child('EnunciationTask.mp4').put(blob);
  firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/SpeechTasks/EnunciationTask').set('Done');
  console.log(blob);
}

handleLongCapture = async () => {
    const videoData = await this.camera.recordAsync();
    this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
};

    handleCaptureOut = () => {
        if (this.state.capturing)
//  console.log(captures.map({ uri }));
//  console.log(_.concat(this.state.captures, { height: '4224' }));
  //      this.uploadImage(this.state.captures.map(function({uri}){return {uri}}));
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
    };

    componentWillMount(){
      this.setState({
        text: 'Please Read the Vowels on the Screen that will appear after 10 seconds.'
      })
    }

    read(){
      if (this.state.capturing)(
        sleep(10000).then(() => {
          this.setState({
            text: 'A'
          })
      })
      )
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

                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                    <Card><CardSection><Text style={{fontSize: 36, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center'}}> {this.state.text} </Text></CardSection></Card>
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
