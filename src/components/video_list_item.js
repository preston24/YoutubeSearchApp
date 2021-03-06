import React from 'react';
import '../styles/App.css';


const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return ( 
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="stuff" src={imageUrl} /> 
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;