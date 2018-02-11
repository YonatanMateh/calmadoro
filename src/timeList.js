import React from 'react'
import TimeBtn from './timeButton';
import CustomTime from './customTime'

class TimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCustom: "hide", isWorkMode: true, times: this.workTimes }
  }

  workTimes = ["15", "20", "25", "30", "35", "custom"];
  breakTimes = ["3", "4", "5", "6", "7", "custom"];

  changeTime = (newTime) => {
    if (newTime === "custom") {
      this.setState({
        isCustom: this.state.isCustom === "hide" ? "show" : "hide"
      })
    } else {
      this.props.changeTime(newTime < 10 ? (0 + newTime) : newTime);
      this.setState({ isCustom: "hide" })
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isWorkMode) {
      this.setState({ times: this.workTimes });
    } else {
      this.setState({ times: this.breakTimes });
    }
  }

  render() {
    return (
      <div className="row time-row justify-content-center">
        {this.state.times.map((item, index) =>
          <TimeBtn key={index} changeTime={this.changeTime} value={item} />
        )}
        <CustomTime changeTime={this.changeTime} isCustom={`col-lg-3 ${this.state.isCustom}`} />
      </div>
    )
  }
}

export default TimeList;