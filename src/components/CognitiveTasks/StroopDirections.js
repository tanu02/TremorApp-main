import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, View, Text, Alert } from 'react-native';

class StroopDirections extends Component {
  publish=()=>{
   Actions.StroopTask({Date: this.props.Date, Patient: this.props.Patient});
 }
  render(){
    return(
      <ScrollView>
        <Card>
        <CardSection>
          <Text style={styles.pickerTextStyle}>
            Please follow the instructions that are going to change randomly every couple of weeks.{"\n"} {"\n"}
          </Text>
        </CardSection>
      </Card>
      <Card>
        <Button onPress={this.publish}>
          Next
        </Button>
      </Card>
      <Text> {"\n"} {"\n"} </Text>
    </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    flex: 1,
    justifyContent: "center",
    fontFamily: 'System',
  },
  Title: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});

export default StroopDirections;
