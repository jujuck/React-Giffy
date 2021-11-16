import React from 'react';
import Gif from './Gif';
import './GifList.css';

const GifList = ({ gifs, onUpdateSelectedGif }) => {
  return (
    <div className="gif-list">
      <p>Ma liste de Gifs</p>
      {gifs.map((gif) => (
        <Gif gif={gif} key={gif.id} onUpdateSelectedGif={onUpdateSelectedGif} />
      ))}
    </div>
  );
};

export default GifList;
