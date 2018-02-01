import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class TimeButton extends React.Component {
  constructor(props) {
    super(props);
  }
changeTime = () => {
  this.props.changeTime(this.timeButton.value);
}

  render() {
    return(
      <button onClick={this.changeTime} ref={(btn) => {this.timeButton = btn}} type="button" 
      className="btn btn-outline-secondary time-btn" value={this.props.value}>{this.props.value}</button>
    )
  }
}


export default TimeButton;