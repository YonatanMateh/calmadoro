import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { setTimeout } from 'timers';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { minutes: '0', seconds: '02', chohort: "7" };
    this.tick = this.tick.bind(this);
  }

  componentWillUnmount() {
    clearImmediate(this.timer);
  }

  tick() {

    if (this.state.seconds == 0 && this.state.minutes == 0) {
      this.finished();
      this.reset(this.props);
    } else {

      if (this.state.seconds <= 0) {
        this.setState((prevState, props) => {
          return {
            seconds: "02",
            minutes: "00"//prevState.minutes - 1
          };
        });
      } else {
        this.setState((prevState, props) => {
          return { seconds: (prevState.seconds < 11) ? ('0' + --prevState.seconds).slice(-2) : --prevState.seconds };
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    switch (nextProps.action) {
      case "start":
        this.strat(nextProps);
        break;
      case "reset":
        this.reset(nextProps);
        break;
      case "pause":
        this.pause();
        break;
      case "timeChanged":
        this.timeChanged(nextProps);
        break;
    }
  }

  finished = () => {
    this.props.finished();
  }
  strat = (props) => {
    this.timer = setInterval(this.tick, 1000);

  }

  pause = () => {
    clearInterval(this.timer);
   // this.props.stopMusicFunc();

  }

  reset = (props) => { 
    this.updateTime(props);
    clearInterval(this.timer);

  }

  timeChanged = (props) => {
    clearInterval(this.timer);
    this.updateTime(props);
    this.strat(props);
  }

  updateTime = (nextProps) => {
    this.setState((prevState) => {
      return {
        minutes: nextProps.newTime,
        seconds: '00'
      }
    })
  }

  render() {
    return (
      <div className="row center-div">
        <h2 className='clock'>{this.state.minutes}:{this.state.seconds}</h2>
      </div>
    );
  }
}

export default Clock;

