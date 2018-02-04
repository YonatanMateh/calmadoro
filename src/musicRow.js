import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import MusicItem from './musicItem'
import VideoCover from './videoCover'

class MusicRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenVideoId: "", videoIds: ["N2TRnC7g6Jo", "BPNTC7uZYrI", "YrLk4vdY28Q", "G_e707496Fg"],
      playMusic: false, stopMusic: false
    }
  }

  videoChosen = (newVideoId) => {
    this.setState({ choosenVideoId: newVideoId, playMusic: false });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playMusic) {
      this.setState({ playMusic: true, choosenVideoId: this.state.choosenVideoId ? this.state.choosenVideoId : "BPNTC7uZYrI" });
    }

    if (newProps.stopMusic) {
      this.setState({ stopMusic: true });
    } else {
      this.setState({ stopMusic: false });

    }
  }


  render() {
    return (
      <div className="row justify-content-md-center music-container">
        {this.state.videoIds.map((item, index) =>
          <MusicItem key={index} videoId={item} videoChosen={this.videoChosen} choosenVideoId={this.state.choosenVideoId}
            playMusic={this.state.playMusic} stopMusic={this.state.stopMusic}><VideoCover /></MusicItem>
        )
        }
      </div>
    )
  }
}




export default MusicRow;