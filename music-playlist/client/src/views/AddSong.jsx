import { useState } from "react";
import{useNavigate} from "react-router-dom";


const AddSong = (props) => {

    const navigate = useNavigate()

    const [songTitle, setSongTitle] = useState('')
    const [link, setLink] = useState('')
    const [genre, setGenre] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const [errors, setErrors] = useState({})

    const submitHandler = (event) => {
        event.preventDefault()
        const newSong = {songTitle, link, genre, addedby, errors}
        axios.post('http://localhost:8000/playlists', newSong)
        .then((res) => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    
    return(
        <div>
            <h1>Add a Song!</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="songTitle">Song Title</label>
                <input type="text" name="songTitle" onChange={(event) => setSongTitle(event.target.value)} value={songTitle}></input>
                {
                    errors.songTitle?
                    <p>{errors.songTitle.message}</p>:
                    null
                }
                <label htmlFor="link">Song Title</label>
                <input type="text" name="link" onChange={(event) => setLink(event.target.value)} value={link}></input>
                {
                    errors.link?
                    <p>{errors.link.message}</p>:
                    null
                }
                <label htmlFor="genre">Song Title</label>
                <input type="text" name="genre" onChange={(event) => setGenre(event.target.value)} value={genre}></input>
                {
                    errors.genre?
                    <p>{errors.genre.message}</p>:
                    null
                }
                <label htmlFor="addedBy">Song Title</label>
                <input type="text" name="addedBy" onChange={(event) => setAddedBy(event.target.value)} value={addedBy}></input>
                {
                    errors.addedBy?
                    <p>{errors.addedBy.message}</p>:
                    null
                }
                <button>ADD</button>
            </form>
        </div>
    )
}
}

export default AddSong;