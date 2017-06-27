// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  setBitrate() {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, console.log(this.state))
  }

  setResolution() {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    }, console.log(this.state))
  }

  render() {
    return (
      <div className="youtube-debugger">
        <button className="bitrate" onClick={this.setBitrate.bind(this)}></button>
        <button className="resolution" onClick={this.setResolution.bind(this)}></button>
      </div>
    )
  }
}
