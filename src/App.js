import React, {useState, useEffect} from 'react';
import MusicMainPage from './music_webpage/MusicMainPage';

function App() {
  let [AlbumData, setAlbumData] = useState();

  useEffect(() => {
      fetch("https://itunes.apple.com/in/rss/topalbums/limit=25/json")  
      .then(response => response.json())
      .then(data => setAlbumData(data.feed.entry))
  }, [])

  console.log("------->",AlbumData);
  return (
    <>
      {AlbumData ? <MusicMainPage AlbumData = { AlbumData }/>: null}
    </>
  )
}

export default App;
