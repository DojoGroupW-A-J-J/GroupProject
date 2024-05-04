import "./css/App.css"
import Details from "./views/Details"
import AddSong from "./views/AddSong"
import { Routes, Route } from "react-router-dom"
import Home from "./views/home"
import MainDisplay from "./views/MainDisplay"
import Update from "./views/Update"

function App() {

  return (
    <div>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/addSong' element={<AddSong/>}/>
      <Route path='/mainDisplay' element={<MainDisplay/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </div>
  )
}

export default App
