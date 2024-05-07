import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Link,
  TextField,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";

const Update = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [songTitle, setSongTitle] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [errors, setErrors] = useState({});

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/playlists/${id}`)
      .then((response) => {
        const { songTitle, link, genre, addedBy } = response.data;
        setSongTitle(songTitle);
        setLink(link);
        setGenre(genre);
        setAddedBy(addedBy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newSong = { songTitle, link, genre, addedBy };
    axios
      .put(`http://localhost:8000/api/playlists/${id}`, newSong)
      .then((res) => {
        navigate(`/mainDisplay`);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

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
          <Link
            component={RouterLink}
            href="#"
            underline="none"
            to={`/mainDisplay`}
          >
            Back
          </Link>
        </div>
        <h1>Update a Song</h1>
        <form onSubmit={submitHandler}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {/* Song Title */}
            <div>
              <TextField
                required
                id="outlined-required"
                label="Song Title"
                type="text"
                value={songTitle}
                onChange={(event) => setSongTitle(event.target.value)}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
              {errors.songTitle && <p>{errors.songTitle.message}</p>}
            </div>

            {/* Link */}
            <div>
              <TextField
                required
                id="outlined-required"
                label="Link"
                type="text"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
              {errors.link && <p>{errors.link.message}</p>}
            </div>

            {/* Genre */}
            <div>
              <TextField
                required
                id="outlined-required"
                label="Genre"
                type="text"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
              {errors.genre && <p>{errors.genre.message}</p>}
            </div>

            {/* Added By */}
            <div>
              <TextField
                required
                id="outlined-required"
                label="Added By"
                type="text"
                value={addedBy}
                onChange={(event) => setAddedBy(event.target.value)}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
              {errors.addedBy && <p>{errors.addedBy.message}</p>}
            </div>
          </Box>

          <Button type="submit">UPDATE</Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Update;
