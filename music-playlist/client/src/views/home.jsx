import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <div>
        <h1>Music Playlist</h1>
        <Link to={`/addSong`}>Add a Song</Link>
        <Link to={`/mainDisplay`}>My Playlist</Link>
        </div>
    )
}

export default Home