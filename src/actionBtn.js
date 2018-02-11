import React from 'react'

class ActionBtn extends React.Component {
  btnClicked = () => {
    this.props.actionClicked(this.btnRef.value);
  }
  render() {
    return (
      <div className="col-sm-3">
      <button type="button" ref={(btn) => this.btnRef = btn} onClick={this.btnClicked}
        className="btn action-btn default-text" value={this.props.value}>{this.props.value}</button>
        </div>
    )
  }
}

export default ActionBtn;