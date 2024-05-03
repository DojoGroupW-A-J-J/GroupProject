import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'


const Update = (props) => {
  const { id } = useParams()
  const navigate = useNavigate();

  const [songTitle, setSongTitle] = useState('');
  const [link, setLink] = useState('');
  const [genre, setGenre] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/playlists/${id}`)
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
    const newSong = { songTitle, link, genre, addedBy }
    axios.put(`http://localhost:8000/api/playlists/${id}`, newSong)
    .then((res) =>{
        navigate(`/mainDisplay`)
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors)
    })

}

  return(
    <div>
            <h1>Update a Song</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="songTitle">Song Title</label>
                <input type="text" name="songTitle" onChange={(event) => setSongTitle(event.target.value)} value={songTitle} />
                {errors.songTitle && <p>{errors.songTitle.message}</p>}

                <label htmlFor="link">Link</label>
                <input type="text" name="link" onChange={(event) => setLink(event.target.value)} value={link} />
                {errors.link && <p>{errors.link.message}</p>}

                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" onChange={(event) => setGenre(event.target.value)} value={genre} />
                {errors.genre && <p>{errors.genre.message}</p>}

                <label htmlFor="addedBy">Added By</label>
                <input type="text" name="addedBy" onChange={(event) => setAddedBy(event.target.value)} value={addedBy} />
                {errors.addedBy && <p>{errors.addedBy.message}</p>}

                <button>UPDATE</button>
            </form>
    </div>
  )
};

export default Update;
