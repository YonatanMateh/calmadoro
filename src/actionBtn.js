import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class ActionBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  btnClicked = () => {
    this.props.actionClicked(this.btnRef.value);
  }
  render() {
    return (
        <button type="button" ref={(btn) => this.btnRef = btn} onClick={this.btnClicked} 
        className="btn action-btn bounce" value={this.props.value}>{this.props.value}</button>
    )
  }
}


export default ActionBtn;