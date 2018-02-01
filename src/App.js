import React, { Component } from 'react';
import './App.css';
import { clearImmediate } from 'timers';
import Clock from './clock'
import TimeList from './timeList'
import ActionRow from './actionRow'
import MusicRow from './musicRow'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { updatedTime: '25', action: "", value: "start", playMusic: false, isStopMusic: false}
  }
  changeTime = (newTime) => {
    this.setState((state, props) => {
      return {
        updatedTime: newTime,
        action: "timeChanged"
      }
    });
    this.setState({value:"pause"});
  }

  activateAction = (value) => {
    if(value === "start") {
      this.setState({value: "pause", playMusic: false, isStopMusic: true});
    } else if (value === "pause" || value === "reset") {
      this.setState({value: "start", playMusic: false, isStopMusic: true});
    }
     this.setState({ action: value, playMusic: false });
     
  }
  finished = () => {
    this.setState({playMusic: true, action: "reset", value: "start", isStopMusic: false});
  }

  stopMusic = () => {
    console.log("stop music " + this.state.isStopMusic)

  }
  render() {
    return (
      <div className="App">
        <Clock newTime={this.state.updatedTime} action={this.state.action} finished={this.finished} stopMusicFunc={this.stopMusic}/>
        <TimeList changeTime={this.changeTime} />
        <ActionRow activateAction={this.activateAction} value={this.state.value}/>
        <MusicRow videoChosen={this.videoChosen} playMusic={this.state.playMusic} stopMusic={this.state.isStopMusic}/>
      </div>
    );
  }
}



export default App;
