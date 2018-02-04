import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { setTimeout } from 'timers';
// import $ from 'jquery'
import CircleType from 'circletype';
import DocumentTitle from 'react-document-title'
import {Icon} from 'react-fa'


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { minutes: '25', seconds: '00'};
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
            seconds: "59",
            minutes: (prevState.minutes < 11) ? '0' + --prevState.minutes : --prevState.minutes
            // minutes: (prevState.minutes < 11) ? ('0' + --prevState.minutes).slice(-2) : --prevState.minutes
          };
        });
      } else {
        this.setState((prevState, props) => {
          return { seconds: (prevState.seconds < 11) ? '0' + --prevState.seconds : --prevState.seconds };
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

  componentDidMount() {
    const circleType = new CircleType(this.mainTitle);
    circleType.radius(330);
  }
 
  title =() => {
    return <div><Icon name="clock"/>{this.state.minutes}:{this.state.seconds}</div>
  }

  render() {
    return (
      // <DocumentTitle title={this.title()}>
      <div className="row center-div">
      <span className="main-title" ref={(title) => this.mainTitle = title}>Pomodoro</span>
        <h2 className='clock'>{this.state.minutes}:{this.state.seconds}</h2>
      </div>
      // </DocumentTitle>
    );
  }
}

export default Clock;

