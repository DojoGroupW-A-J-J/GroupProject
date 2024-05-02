import { Router } from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist, updatePlaylist, getPlaylistByID } from "../controllers/playlist.controllers.js";

const router = Router()

router.route("/playlists")
  .get(getAllPlaylists)
  .post(createPlaylist)

router.route("/playlists/:id")
  .get(getPlaylistByID)
  .put(updatePlaylist)
  .delete(deletePlaylist)

export default router
