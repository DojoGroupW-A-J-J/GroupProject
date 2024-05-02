import "./css/App.css"
//import { useState } from "react"
import Details from "./views/Details"
import AddSong from "./views/AddSong"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path='/details' element={<Details/>}/>
      <Route path='/add' element={<AddSong/>}/>
    </Routes>
    </>
  )
}

export default App
