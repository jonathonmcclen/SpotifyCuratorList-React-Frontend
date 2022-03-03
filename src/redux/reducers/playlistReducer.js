//reducer with switch operator

function playlistReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "FETCH_PLAYLIST_SUCCESS":
        return { ...state, all: action.payload };
  
      case "CREATE_PLAYLIST_SUCCESS":
        return { ...state, all: [...state.all, action.payload] };
      default:
        return state;
    }
  }