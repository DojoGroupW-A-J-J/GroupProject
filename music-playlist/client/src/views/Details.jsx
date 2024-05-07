import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  createTheme,
  ThemeProvider,
  TextField,
  Button,
  List,
  styled,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/playlists/${id}`)
      .then((res) => {
        setSong(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/playlists/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // Spreads the child elements across the available space
              alignItems: "center", // Aligns items vertically in the center
              width: "100%",
            }}
          >
            <Link component={RouterLink} href="#" underline="none" to={`/`}>
              Back
            </Link>
            <Link
              component={RouterLink}
              href="#"
              underline="none"
              to={`/update/${id}`}
            >
              Update
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Box>
              <List dense={dense}>
                <ListItem>
                  <ListItemText
                    primary={song.songTitle}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={song.link}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={song.genre}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={song.addedBy}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              </List>

              <Button onClick={deleteHandler}>Delete Song</Button>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
