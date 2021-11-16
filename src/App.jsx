import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import './App.css';
import { SelectedGif, GifList } from './components';

function App() {
  const [gifs, setGifs] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${env.GIPHY_API_KEY}&q=cheeseburgers&limit=5`,
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  const onUpdateSelectedGif = (gif) => {
    setSelectedGif(gif);
  };

  return (
    <div className="App">
      <h1 className="App-header">Giphy App</h1>
      <div className="content">
        <SelectedGif Gif={selectedGif} />
        <GifList gifs={gifs} onUpdateSelectedGif={onUpdateSelectedGif} />
      </div>
    </div>
  );
}

export default App;
