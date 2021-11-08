import React, { useState, useEffect } from 'react';
import { SelectedGif, GifList } from './components';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log('Use Effect in APP');
    fetch(
      'http://api.giphy.com/v1/gifs/search?api_key=duS9lDLF1o9Me26X8rpOlehNSbkFZqfv&q=cheeseburgers&limit=5',
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      });
    console.log(gifs);
  }, []);

  return (
    <div className="App">
      <SelectedGif />
      <GifList />
    </div>
  );
}

export default App;
