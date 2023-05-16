import React from 'react';
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Alert, Vibration } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection } from '../common';
import currentWeekNumber from 'current-week-number';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const DURATION = 1000;

export default class FeetTogetherBalance extends React.Component {
  state = {
    gyroscopeData: {},
    accelerometerData: {},
    value: '',
    list: [],
    accvalue: '',
    acclist: [],
    textValue: 'Not Started',
    buttonValue: 'Start',
  };

  componentDidMount() {
    this._fast();
  }

  componentWillUnmount(){
    if (this.state.buttonValue == ''){
      Alert.alert("Warning: You have not finished testing! Please redo the testing.")
    }
    else {
      console.log('Done')
    }
  }

  _toggle = () => {
    if (this._subscription) {
      if (this.state.buttonValue == 'In Progress') {
        console.log('In Progress')
      }
      else {
      this._unsubscribe();
      this._unasubscribe();
      this.setState({
      textValue: 'Stopped'
      })
    }
  }
  if (this.state.buttonValue == 'Redo'){
    console.log('redo')
    this.setState({
      gyroscopeData: {},
      accelerometerData: {},
      value: '',
      list: [],
      accvalue: '',
      acclist: [],
    })
    this._subscribe();
    this._asubscribe();
    this.setState({
    textValue: 'In Progress',
    buttonValue: '',
  })
    sleep(30000).then(() => {
      this._unsubscribe();
      this._unasubscribe();
      this.setState({
      textValue: 'Stopped',
      buttonValue: 'Redo',
    })
    Vibration.vibrate(DURATION);
    Alert.alert("The testing period is now over!");
  })
  }
  else {
      this._subscribe();
      this._asubscribe();
      this.setState({
      textValue: 'In Progress',
      buttonValue: '',
    })
      sleep(30000).then(() => {
        this._unsubscribe();
        this._unasubscribe();
        this.setState({
        textValue: 'Stopped',
        buttonValue: 'Redo',
      })
      Vibration.vibrate(DURATION);
      Alert.alert("The testing period is now over!");
    })

    }
  };

  _fast = () => {
    Gyroscope.setUpdateInterval(20);
    Accelerometer.setUpdateInterval(20);
  };

  _subscribe = () => {
    this._fast();
    this._subscription = Gyroscope.addListener(result => {
      this.setState(state => {
      const list = state.list.concat(result);
      return {
        list,
        result: '',
      };
    });
  });
  };
  _asubscribe = () => {
    this._fast();
    this._asubscription = Accelerometer.addListener(accresult => {
      this.setState(state => {
      const acclist = state.acclist.concat(accresult);
      return {
        acclist,
        accresult: '',
      };
    });
    });
  };



  _unsubscribe = () => {
    var year = new Date().getFullYear();
    var week = currentWeekNumber();
    this._subscription && this._subscription.remove();
    this._subscription = null;
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/BalanceTasks/FeetTogetherBalance/GyroSensor').set(this.state.list);
    firebase.database().ref('users/'+this.props.Patient+'/'+year+'/'+week+'/BalanceTasks/FeetTogetherBalance/State').set('Done');
  };
  _unasubscribe = () => {
    this._asubscription && this._asubscription.remove();
    this._asubscription = null;
    firebase.database().ref('users/'+this.props.Patient+'/'+this.props.Date+'/BalanceTasks/FeetTogetherBalance/Accelerometer').set(this.state.acclist);
  };

  _renderCancel(){
    if (this.state.buttonValue == ''){
      return null;
    }
    else {
      return (
      <Card>
        <Button onPress={this._toggle}>
          {this.state.buttonValue}
        </Button>
      </Card>
    )
    }
  }

  _renderText(){
    if (this.state.textValue == 'In Progress'){
      return (
        <Card>
          <CardSection>
            <Text style={styles.greenText}>{this.state.textValue}</Text>
          </CardSection>
        </Card>
      )
    }
    else {
      return (
        <Card>
          <CardSection>
            <Text style={styles.colorText}>{this.state.textValue}</Text>
          </CardSection>
        </Card>
      )
    }
  }

  render() {
    return (
      <ScrollView>
      <Card>
          <Image
            style={styles.Image}
            source={require('./FeetTogetherBalance.png')}
            />
            </Card>
            <Card>
              <CardSection>
                <Text style={styles.Text}>Directions: Please Hold the Phone in Your Hand standing up. The phone will vibrate after 30 seconds.</Text>
              </CardSection>
            </Card>
          {this._renderText()}
        {this._renderCancel()}
      </ScrollView>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 1000) / 1000;
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
    fontSize: 22
  },
  colorText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    padding: 10,
    fontSize: 22
  },
  greenText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    padding: 10,
    fontSize: 22
  },
  Image: {
    alignSelf: 'center',
    width: "100%",
    resizeMode: "contain"
  }
});
