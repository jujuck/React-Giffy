import React from 'react';
import './Gif.css';

const Gif = ({ gif, onUpdateSelectedGif }) => {
  return (
    <div className="gif">
      <p>{gif.title}</p>
      <img
        src={gif.images.downsized_medium.url}
        alt={gif.title}
        onClick={() => onUpdateSelectedGif(gif)}
        role="presentation"
        className="gif_image"
      />
    </div>
  );
};

export default Gif;
