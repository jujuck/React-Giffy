import React, { useState, useEffect } from 'react';
import { SelectedGif, GifList } from './components';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log('Use Effect in APP');
    console.log(gifs);
    setGifs([]);
  }, []);

  return (
    <div className="App">
      <SelectedGif />
      <GifList />
    </div>
  );
}

export default App;
