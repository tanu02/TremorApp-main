//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from './common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';
import firebase from 'firebase';
import currentWeekNumber from 'current-week-number';

export default class MedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    this.ButtonSave = this.ButtonSave.bind(this);
    this.ButtonAdd = this.ButtonAdd.bind(this);
    global.condition = 0;
  }

  ButtonSave(){
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    global.condition = global.condition + 1
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Disease').set(this.state.name);
  firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Time').set(this.state.email);
  firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Symptoms').set(this.state.subject);
  firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Medication').set(this.state.message);
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/MedicalHistory/State').set('Done');
    Alert.alert("Successfully Completed! Now Redirecting to Main Page");
    Actions.Main({ Date: this.props.Date, Patient: this.props.Patient, Section: 'MedicalHistory' });
  }

  ButtonAdd(){
    global.condition = global.condition + 1
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Disease').set(this.state.name);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Time').set(this.state.email);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Symptoms').set(this.state.subject);
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/MedicalHistory/'+global.condition+'/'+'Medication').set(this.state.message);
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/MedicalHistory/State').set('Done');
    Alert.alert("You have added a new medical condition.");
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/MedicalHistory/State').set('Done');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <Card>
        <CardSection>
          <Text style={{ fontSize: 27, fontWeight: 'bold', paddingTop: 15, paddingLeft: 15, paddingRight: 15, paddingBottom: 15}}>
            The first time you enter this form, enter every disease separately. Every week after, please only enter the medication or a change in diagnosis.
          </Text>
        </CardSection>
      </Card>
          <Card>
            <CardSection>
            <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{"Medical Condition"}</Text>
            <TextInput
              placeholder={"Type Your Condition"}
              autoCorrect={false}
              style={styles.inputStyle}
              multiline={true}
              numberofLines={2}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
            </View>
            </CardSection>
            <CardSection>
              <View style={styles.containerStyle}>
              <Text style={styles.labelStyle}>{"Symptoms"}</Text>
              <TextInput
                placeholder={"Type Your Symptoms"}
                autoCorrect={false}
                style={styles.inputStyle}
                multiline={true}
                numberofLines={2}
                onChangeText={(subject) => this.setState({subject})}
                value={this.state.subject}
              />
              </View>
            </CardSection>
            <CardSection>
            <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{"Diagnosis Date"}</Text>
            <TextInput
              placeholder={"Date of Diagnosis"}
              autoCorrect={false}
              style={styles.inputStyle}
              multiline={true}
              numberofLines={2}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            </View>
            </CardSection>
            <CardSection>
              <View style={styles.containerStyle}>
              <Text style={styles.labelStyle}>{"Medication"}</Text>
              <TextInput
                placeholder={"Type Your Medications"}
                autoCorrect={false}
                style={styles.inputStyle}
                multiline={true}
                numberofLines={2}
                onChangeText={(message) => this.setState({message})}
                value={this.state.message}
              />
              </View>
            </CardSection>
            <Text>{"\n"}</Text>
            <Button onPress={this.ButtonAdd}>
              Another Condition
            </Button>
            <Text>{"\n"}</Text>
            <Button onPress={this.ButtonSave}>
              Submit Information
            </Button>
          </Card>
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 22,
    lineHeight: 27,
    flex: 2
  },
  labelStyle:{
    fontSize: 22,
    paddingLeft: 20,
    flex: 1,
    alignItems: 'baseline'
  },
  containerStyle:{
    height: 150,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 15,
    marginRight: 5
  }
});
