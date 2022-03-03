export const getPlaylist = () => {
    return (dispatch) => {
      fetch(`http://localhost:3001/players`)
        .then((res) => res.json())
        .then((players) =>
          dispatch({ type: "FETCH_PLAYERS_SUCCESS", payload: players })
        );
    };
  };
  
  export const createPlaylist = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: data }),
      })
        .then((res) => res.json())
        .then((player) =>
          dispatch({ type: "CREATE_PLAYER_SUCCESS", payload: player })
        );
    };
  };