import React from 'react'

class ActionBtn extends React.Component {
  btnClicked = () => {
    this.props.actionClicked(this.btnRef.value);
  }
  render() {
    return (
      <button type="button" ref={(btn) => this.btnRef = btn} onClick={this.btnClicked}
        className="btn action-btn default-text" value={this.props.value}>{this.props.value}</button>
    )
  }
}

export default ActionBtn;