import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TimeBtn from './timeButton';
import CustomTime from './customTime'
import { stat } from 'fs';
class TimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCustom: "hide col-lg-2" }
  }

  changeTime = (newTime) => {
    if (newTime === "custom") {
      if (this.state.isCustom === "hide col-lg-2") {
        this.setState({ isCustom: "show col-lg-2" })
      } else {
        this.setState({ isCustom: "hide col-lg-2" })
      }
    } else {
      this.props.changeTime(newTime);
      this.setState({ isCustom: "hide col-lg-2" })

    }
  }

  render() {
    return (
      <div className="row justify-content-md-center time-row">
        <TimeBtn changeTime={this.changeTime} value="15" />
        <TimeBtn changeTime={this.changeTime} value="20" />
        <TimeBtn changeTime={this.changeTime} value="25" />
        <TimeBtn changeTime={this.changeTime} value="30" />
        <TimeBtn changeTime={this.changeTime} value="35" />
        <TimeBtn changeTime={this.changeTime} value="custom" />
        <CustomTime changeTime={this.changeTime} isCustom={this.state.isCustom} />
      </div>
    )
  }
}

export default TimeList;