import "./css/App.css"
import { useState } from "react"
import Details from "./views/Details"
import AddSong from "./views/AddSong"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainDisplay from "./views/MainDisplay"

function App() {

  const [ playlist, setPlaylist ] = useState({})
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDisplay />}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/add' element={<AddSong playlist={playlist} setPlaylist={setPlaylist}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
