import React from 'react';
import './Gif.css';

const Gif = ({ gif }) => {
  console.log(gif);
  return (
    <div className="gif">
      <p>{gif.title}</p>
      <img src={gif.images.downsized_large.url} alt={gif.title} />
    </div>
  );
};

export default Gif;
