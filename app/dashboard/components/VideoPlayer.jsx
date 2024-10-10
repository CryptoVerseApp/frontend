import React, { useState } from 'react';

const VideoPlayer = ({ videos = [] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // If there are no videos, display a message
  if (videos.length === 0) {
    return <div>No videos available.</div>;
  }

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div>
      <video controls src={videos[currentVideoIndex]?.src} width="100%" />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={handlePreviousVideo} disabled={currentVideoIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextVideo} disabled={currentVideoIndex === videos.length - 1}>
          Next
        </button>
      </div>

      <div>
        <h3>{videos[currentVideoIndex]?.title}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;
