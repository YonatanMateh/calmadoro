import React from 'react'



class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about-container">
        <a target="_blank" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" className="about"> What is the Pomodoro Technique?</a>
        </div>
    )
  }
}


export default About;