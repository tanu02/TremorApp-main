import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import { Router, Scene } from 'react-native-router-flux';
import Home  from './components/Home';
import Chat  from './components/Chat';
import Main  from './components/Main';
import MedicalHistory  from './components/MedicalHistory';
import TremorTasks  from './components/TremorTasks';
import IntentionTremor  from './components/TremorTasks/IntentionTremor';
import KineticTremor  from './components/TremorTasks/KineticTremor';
import PosturalTremor  from './components/TremorTasks/PosturalTremor';
import RapidAlternatingMovement  from './components/Bradykinesia/RapidAlternatingMovement';
import RestTremor  from './components/TremorTasks/RestTremor';
import FeetTogetherBalance  from './components/BalanceTasks/FeetTogetherBalance';
import TandemStanceBalance  from './components/BalanceTasks/TandemStanceBalance';
import NormalGait  from './components/GaitTasks/NormalGait';
import TandemGait  from './components/GaitTasks/TandemGait';
import DominantIndexMiddle  from './components/Bradykinesia/DominantIndexMiddle';
import NonDominantIndexMiddle  from './components/Bradykinesia/NonDominantIndexMiddle';
import DualIndex  from './components/Bradykinesia/DualIndex';
import DominantIndexFinger  from './components/Bradykinesia/DominantIndexFinger';
import NonDominantIndexFinger  from './components/Bradykinesia/NonDominantIndexFinger';
import EnunciationTask  from './components/EnunciationTask/camera.page.js';
import SpeechRecordingTask  from './components/SpeechRecordingTask/camera.page.js';
import StroopTask  from './components/CognitiveTasks/StroopTask';
import StroopDirections  from './components/CognitiveTasks/StroopDirections';
import CogDirections  from './components/CognitiveTasks/CogDirections';
import CognitiveTask  from './components/CognitiveTasks/CognitiveTask';
import Bradykinesia  from './components/Bradykinesia';
import BalanceTasks  from './components/BalanceTasks';
import GaitTasks  from './components/GaitTasks';
import CreateAnAccount  from './components/CreateAnAccount';
import SpeechTasks  from './components/SpeechTasks';
import CognitiveTasks  from './components/CognitiveTasks';
import ForgotPasscode  from './components/ForgotPasscode';
import GyroTest  from './components/GyroTest';
import Consent  from './components/Consent';
import Watch  from './components/Watch';
import { SwitchNavigator } from 'react-navigation'
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
    <Router>
      <Scene key="root" hideNavBar>
      <Scene key="home">
        <Scene type="reset" rightTitle="New User" onRight={() => {Actions.CreateAnAccount()}} key='home' title='Passcode Information' component={Home} initial/>
        <Scene key='CreateAnAccount' title='Passcode Information' component={CreateAnAccount}/>
        <Scene type="reset" rightTitle="New User" onRight={() => {Actions.CreateAnAccount()}} key='home' title='Passcode Information' component={Home} initial/>
        <Scene key='ForgotPasscode' title='Forgot Passcode' component={ForgotPasscode}/>
      </Scene>
      <Scene key='Consent'>
        <Scene key='Consent' title='Consent Form' component={Consent}/>
      </Scene>
      <Scene key="Main">
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='MedicalHistory' title='Medical History' component={MedicalHistory}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='TremorTasks' title='Tremor Tasks' component={TremorTasks}/>
        <Scene key='RestTremor' title='Rest Tremor' component={RestTremor}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='TremorTasks' title='Tremor Tasks' component={TremorTasks}/>
        <Scene key='PosturalTremor' title='Postural Tremor' component={PosturalTremor}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='TremorTasks' title='Tremor Tasks' component={TremorTasks}/>
        <Scene key='IntentionTremor' title='Intention Tremor' component={IntentionTremor}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='TremorTasks' title='Tremor Tasks' component={TremorTasks}/>
        <Scene key='KineticTremor' title='Kinetic Tremor' component={KineticTremor}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='RapidAlternatingMovement' title='Rapid Alternating Movement' component={RapidAlternatingMovement}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='DominantIndexMiddle' title='Dominant Index-Middle Finger Tapping' component={DominantIndexMiddle}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='NonDominantIndexMiddle' title='Non-Dominant Index-Middle Finger Tapping' component={NonDominantIndexMiddle}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='DualIndex' title='Dual Index Finger Tapping' component={DualIndex}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='DominantIndexFinger' title='Dominant Index Finger Tapping' component={DominantIndexFinger}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Bradykinesia' title='Bradykinesia Tasks' component={Bradykinesia}/>
        <Scene key='NonDominantIndexFinger' title='Non-Dominant Index Finger Tapping' component={NonDominantIndexFinger}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='BalanceTasks' title='Balance Tasks' component={BalanceTasks}/>
        <Scene key='FeetTogetherBalance' title='Feet Together Balance Task' component={FeetTogetherBalance}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='BalanceTasks' title='Balance Tasks' component={BalanceTasks}/>
        <Scene key='TandemStanceBalance' title='Tandem Stance Balance Task' component={TandemStanceBalance}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='GaitTasks' title='Gait Tasks' component={GaitTasks}/>
        <Scene key='NormalGait' title='Normal Gait Task' component={NormalGait}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='GaitTasks' title='Gait Tasks' component={GaitTasks}/>
        <Scene key='TandemGait' title='Tandem Gait Task' component={TandemGait}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='SpeechTasks' title='Speech Tasks' component={SpeechTasks}/>
        <Scene key='EnunciationTask' title='Enunciation Tasks' component={EnunciationTask}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='SpeechTasks' title='Speech Tasks' component={SpeechTasks}/>
        <Scene key='SpeechRecordingTask' title='Speech Recording Task' component={SpeechRecordingTask}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='CognitiveTasks' title='Cognitive Tasks' component={CognitiveTasks}/>
        <Scene key='CogDirections' title='Cognitive Directions' component={CogDirections}/>
        <Scene key='CognitiveTask' title='Cognitive Task' component={CognitiveTask}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='CognitiveTasks' title='Cognitive Tasks' component={CognitiveTasks}/>
        <Scene key='StroopDirections' title='Stroop Directions' component={StroopDirections}/>
        <Scene key='StroopTask' title='Stroop Task' component={StroopTask}/>
        <Scene type="reset" key='Main' title='Select an Option' component={Main}/>
        <Scene key='Watch' title='Watch Connectivity' component={Watch}/>
      </Scene>
      <Scene key="chat">
        <Scene key='chat' title='ChatPage' component={Chat}/>
      </Scene>
      </Scene>
    </Router>
    );
  }
}
