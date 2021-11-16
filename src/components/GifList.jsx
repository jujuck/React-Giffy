import React from 'react';
import Gif from './Gif';
import './GifList.css';

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      <p>Ma liste de Gifs</p>
      {gifs.map((gif) => (
        <Gif gif={gif} key={gif} />
      ))}
    </div>
  );
};

export default GifList;
