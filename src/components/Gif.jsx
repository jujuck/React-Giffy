import React from 'react';
import './Gif.css';

const Gif = ({ gif, onUpdateSelectedGif }) => {
  return (
    <div className="gif">
      <p>{gif.title}</p>
      <img
        src={gif.images.downsized_large.url}
        alt={gif.title}
        onClick={() => onUpdateSelectedGif(gif)}
        role="presentation"
      />
    </div>
  );
};

export default Gif;
