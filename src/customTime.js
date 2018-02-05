import React from 'react'

class CustomTime extends React.Component {
  changeTime = () => {
    let val = this.inputText.value;
    let isDecimalNumber = (val - Math.floor(val)) !== 0
    if (val > 0 && !isDecimalNumber) {
      this.props.changeTime(this.inputText.value);
    } else {
      alert("Invalid number");
    }
    this.inputText.value = ""
  }

  render() {
    return (
      <div className={this.props.isCustom}>
        <div className="input-group">
          <input ref={(input) => this.inputText = input} type="number" className="form-control time-btn" placeholder="" />
          <span className="input-group-btn">
            <button onClick={this.changeTime} ref={(btn) => { this.timeButton = btn }} type="button"
              className="btn btn-outline-secondary time-btn">GO!</button>
          </span>
        </div>
      </div>
    )
  }
}

export default CustomTime;