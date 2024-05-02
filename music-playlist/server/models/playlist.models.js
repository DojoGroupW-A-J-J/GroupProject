import { model, Schema } from "mongoose";
const PlaylistSchema = new Schema(
  {
    songTitle: {
      type: String,
      required: [true, "Song title is required"],
      minlength: [2, "Song title must be at least 2 characters"],
      maxlength: [255, "song Title must not exceed 255 characters"]
    },
    link: {
      type: String,
      required: [true, "Link is required"],
      minlength: [5, "Link must be at least 5 characters"],
      maxlength: [255, "Link must not exceed 255 characters"]
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      minlength: [2, "Genre must be at least 2 character"],
      maxlength: [255, "Genre must not exceed 255 characters"]
    },
    addedBy: {
      type: String,
      required: [true, "You must say who added this"],
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [255, "Name must not exceed 255 characters"]
    }
  },
  { timestamps: true }
);
const Playlist = model("Playlist", PlaylistSchema)
export default Playlist
