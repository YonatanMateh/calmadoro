import React from 'react'
import ModeButton from './modeButton'

class ModeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titles: ["work mode", "break mode"], chosenBtn: props.chosenTitle }

  }

  modeBtnClicked = (title) => {
    this.props.modeBtnClicked(title);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ chosenBtn: newProps.chosenTitle })
  }

  render() {
    return (
      <div className="mode-container row justify-content-md-center">
        {this.state.titles.map((item, index) =>
          <ModeButton key={index} title={item} btnClicked={this.modeBtnClicked} chosenBtn={this.state.chosenBtn} />
        )}
      </div>
    )
  }
}


export default ModeRow;