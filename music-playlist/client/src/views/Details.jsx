import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const {id} = useParams()
  const [song, setSong] = useState({})
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get(`http://localhost:8000/playlists/${id}`)
        .then((res) =>{
            setSong(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = () =>{
      axios.delete(`http://localhost:8000/playlists/${id}`)
      .then(() =>{
      navigate('/')
  })
  .catch((err) => {
      console.log(err)
  })
}

  return (
    <div>
      <h2>
          {song.songTitle}<br/>
          {song.link}<br/>
          {song.genre}<br/>
          {song.addedBy}
      </h2>
      <button onClick={deleteHandler}>Delete Song</button>
      <Link to={`/`}>Back</Link>
      </div>
  )
};

export default Details;
