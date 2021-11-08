import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import { SelectedGif, GifList } from './components';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log('Use Effect in APP');
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${env.GIPHY_API_KEY}&q=cheeseburgers&limit=5`,
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  return (
    <div className="App">
      <SelectedGif />
      <GifList gifs={gifs} />
    </div>
  );
}

export default App;
