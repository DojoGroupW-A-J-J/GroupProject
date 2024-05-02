import Playlist from "../models/playlist.models.js";
const createPlaylist = async (req, res) => {
  try {
    const newPlaylist = await Playlist.create(req.body);
    res.json(newPlaylist);
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const getAllPlaylists = async (req, res) => {
  try {
    const allPlaylists = await Playlist.find()
    res.json(allPlaylists)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)

  }
}

const getPlaylistByID = async (req, res) => {
  try {
    const foundPlaylist = await Playlist.findById(req.params.id)
    res.json(foundPlaylist)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const updatePlaylist = async (req, res) => {
  const options = {
    new: true,
    runValidators: true
  }
  try {
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, options)
    res.json(updatedPlaylist)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)

  }
}

const deletePlaylist = async (req, res) => {
  try {
    const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id)
    res.json(deletedPlaylist)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)

  }
}

export {
  createPlaylist,
  getAllPlaylists,
  getPlaylistByID,
  updatePlaylist,
  deletePlaylist
}
