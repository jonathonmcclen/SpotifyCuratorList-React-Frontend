import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "./ActionTypes";

const initState = {
  playlists: [],
  playlistsFetched: false,
};

function reducer(state = initState, action) {
  debugger;
  switch (action.type) {
    case FETCH_SUCCESS:
      debugger;
      return { ...state, playlists: action.payload };
    default:
      return state;
  }
}

export default reducer;
