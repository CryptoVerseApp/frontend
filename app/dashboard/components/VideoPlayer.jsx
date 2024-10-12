import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <ReactPlayer 
        url={videoUrl} 
        controls 
        width="100%" 
        height="400px" 
        playing={true}
      />
    </div>
  );
};

export default VideoPlayer;
