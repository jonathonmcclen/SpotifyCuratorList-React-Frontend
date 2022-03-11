import { fetchPlaylists } from "../../api/Playlist";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CREATE_SUCCESS,
} from "./ActionTypes";

export const allPlaylists = "http://localhost:3000/playlist";
export const allGenres = ["http://localhost:3000/genre", "/playlists"];
export const playlistsByGenre = ["http://localhost:3000/genre", "/playlists"];

export const getPlaylists = () => {
  return (dispatch) => {
    fetch(allPlaylists)
      .then((res) => res.json())
      .then((playlists) =>
        dispatch({ type: FETCH_SUCCESS, payload: playlists })
      );
  };
};

export const createPlaylist = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/playlist/new/forfinal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlist: data }),
    })
      .then((res) => res.json())
      .then((playlist) =>
        dispatch({ type: CREATE_SUCCESS, payload: playlist })
      );
  };
};
