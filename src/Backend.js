import firebase from 'firebase';
import React, { Component } from 'react';

class Backend extends Component {
  uid = '';
  messagesRef = null;
  // initialize Firebase Backend
  constructor() {
    super();
    firebase.initializeApp({
      apiKey: "AIzaSyDXt160-i81WFeY_xN6GTLCsnWKe-q1rhQ",
    authDomain: "tremor-diagnosis.firebaseapp.com",
    databaseURL: "https://tremor-diagnosis.firebaseio.com",
    projectId: "tremor-diagnosis",
    storageBucket: "tremor-diagnosis.appspot.com",
    messagingSenderId: "956880230786",
    appId: "1:956880230786:web:d53ca9ad3c0b5fc8"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('users/'+this.patient+'/messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback ({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  Name(name){
    this.patient = name
  }
  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
