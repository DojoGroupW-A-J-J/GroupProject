import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MainDisplay = (props) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/playlists`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello from main display</h1>
      {songs.map((song) => (
        <div key={song._id}>
          <h2>
            <Link to={`/details/${song._id}`}>{song.songTitle}</Link>
          </h2>
          <p>
            Link: {song.link}<br/>
            Genre: {song.genre}<br/>
            Added By: {song.addedBy}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainDisplay;
