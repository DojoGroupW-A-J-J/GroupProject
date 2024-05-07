import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Link,
  createTheme,
  ThemeProvider,
  TextField,
  Button,
} from "@mui/material";

const AddSong = (props) => {
  const navigate = useNavigate();

  const [songTitle, setSongTitle] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    const newSong = { songTitle, link, genre, addedBy };
    axios
      .post("http://localhost:8000/api/playlists", newSong)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors || {});
      });
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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
        <h1>Add a Song!</h1>
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
          <Button type="submit">ADD</Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default AddSong;
