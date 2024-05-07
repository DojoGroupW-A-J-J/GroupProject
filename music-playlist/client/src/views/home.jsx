import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const Home = () => {
  return (
    <div>
      <h1>Music Playlist</h1>
      <div style={{ margin: "10px" }}>
        <Link component={RouterLink} href="#" underline="none" to={`/addSong`}>
          Add a Song
        </Link>
      </div>
      <div style={{ margin: "10px" }}>
        <Link
          component={RouterLink}
          href="#"
          underline="none"
          to={`/mainDisplay`}
        >
          My Playlist
        </Link>
      </div>
    </div>
  );
};

export default Home;
