import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  createTheme,
  ThemeProvider,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Card,
} from "@mui/material";

const MainDisplay = (props) => {
  const [songs, setSongs] = useState([]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/playlists`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link component={RouterLink} href="#" underline="none" to={`/`}>
            Back
          </Link>
        </div>
        <h1>Song List</h1>
        {songs.map((song) => (
          <div key={song._id}>
            <Card
              sx={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                backgroundColor: "#2e2d2d",
                color: "white",
                margin: "20px",
              }}
            >
              <Box>
                {" "}
                <h2>
                  <Link
                    component={RouterLink}
                    href="#"
                    underline="none"
                    to={`/details/${song._id}`}
                  >
                    {song.songTitle}
                  </Link>
                </h2>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography variant="h6" component="div">
                        Link:
                      </Typography>
                      <Typography variant="h6" component="div">
                        Genre:
                      </Typography>
                      <Typography variant="h6" component="div">
                        Added By:
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography variant="h6" component="div">
                        <Link
                          href={song.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                        >
                          {song.link}
                        </Link>
                      </Typography>
                      <Typography variant="h6" component="div">
                        {song.genre}
                      </Typography>
                      <Typography variant="h6" component="div">
                        {song.addedBy}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Box>
            </Card>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default MainDisplay;
