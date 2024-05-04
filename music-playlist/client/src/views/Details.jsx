import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams()
  const [song, setSong] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/playlists/${id}`)
      .then((res) => {
        setSong(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/playlists/${id}`)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>
            { song.songTitle}<br/>
            {song.link}<br/>
            {song.genre}<br/>
            {song.addedBy}
          </h2>
          <button onClick={deleteHandler}>Delete Song</button>
          <Link to={`/`}>Back</Link>
          <Link to={`/update/${id}`}>Update</Link>
        </div>
      )}
    </div>
  )
};

export default Details;
