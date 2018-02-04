import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ModeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chosenBtn: props.chosenBtn};
  }


  componentWillReceiveProps(newProps) {
    this.setState({chosenBtn: newProps.chosenBtn})
  }

  btnClicked = () => {
    this.props.btnClicked(this.title);
  }

  render() {
    return (
      <div className="col-md-4 mode-btn-container">
       
        <button ref = {this.title = this.props.title} onClick = {this.btnClicked} 
        className= {this.state.chosenBtn === this.props.title ? "mode-btn mode-btn-clicked" : "mode-btn"}>
        {this.props.title}</button>
      </div>
    )
  }

}

export default ModeButton;