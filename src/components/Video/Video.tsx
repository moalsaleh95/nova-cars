import React from 'react';
import video from "../../assets/videos/heroVideo.mp4";

function Video() {
  return (
    <div className='container'>
        <video
            src={video}
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
            />
    </div>
  )
}

export default Video;