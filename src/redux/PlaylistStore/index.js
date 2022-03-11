import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CREATE_SUCCESS,
} from "./ActionTypes";

const initState = {
  playlists: [],
  playlistsFetched: false,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, playlists: action.payload };
    case CREATE_SUCCESS:
      return { ...state, playlists: [...state.playlists, action.payload] };
    default:
      return state;
  }
}

export default reducer;
