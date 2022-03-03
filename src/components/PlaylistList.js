import React from 'react'
import { Route } from "react-router-dom";

class PlaylistList extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <a href="/playlists/new">Create New Playlist</a>
                </nav>
                <div id='playlist-list'>
                    <div>This is where the playlists will render!</div>
                </div>
            </div>
        )
    }
}

export default PlaylistList;