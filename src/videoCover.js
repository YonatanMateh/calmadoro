import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Icon} from 'react-fa'

class VideoCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {iconName: "check"}
  }

  videoChosen = (e) => {
    // e.stopPropagation();
    this.props.videoChosen(this.videoId);
  }
  componentWillReceiveProps(newProps) {
    if(newProps.videoChosenId === this.videoId) {
      this.setState({iconName: "check-circle"})
    } else {
      this.setState({iconName: "check"})
    }

  }
  render() {
    return (
      <div className="box">
      {/* <FontAwesomeIcon className='' icon='check-circle' size='2x' /> */}
        <button type="button" className="check-btn" ref={(btn) => this.videoId = this.props.videoId} onClick={this.videoChosen}>
        <Icon className="fas btn" name={this.state.iconName}/></button>
      </div>
    )
  }
}



export default VideoCover;