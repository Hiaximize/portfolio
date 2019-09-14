import React from 'react'
import YouTube from 'react-youtube'


class Video extends React.Component{
    constructor(props){
        super(props)
    }
    

    _onReady = (event) => {
        //event.target.mute()
    }

    _onEnd = (event) => {
        event.target.playVideo()
    }

    render(){
        console.log("height", this.props.height)
        console.log("width", this.props.width)
        const videoOptions = {
            playerVars: {
                height: String(this.props.height),
                width: String(this.props.width),
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                loop: 1,
                zoom: 2,
                playlist: "RR2EI8EEOOw"
            }
        }
        return(
            <div id="videoContainer">
                < YouTube videoId = "RR2EI8EEOOw"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd} />
            </div>
        )
    }
}
export default Video