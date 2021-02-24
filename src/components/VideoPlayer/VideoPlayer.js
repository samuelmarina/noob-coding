import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';
import arrow from "../../images/arrow-down.png";

const VideoPlayer = ({videoId}) => {
    return (
        <div className="videoPlayer" id="slide2">
            <h1>Task explanation video</h1>
            <YouTube videoId={videoId} className="YTPlayer"/>

            <img onClick={function(){scroll()}} src={arrow} alt="Arrow" className="arrow2"/>
        </div>
    )
}

const scroll = () => {
    document.querySelector('#slide3').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

export default VideoPlayer
