import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs }) => {
  return (
    <div>
      <p>Ma liste de Gifs</p>
      {gifs.map((gif) => (
        <Gif gif={gif} key={gif} />
      ))}
    </div>
  );
};

export default GifList;
