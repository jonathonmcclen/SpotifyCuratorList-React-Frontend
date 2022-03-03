import React from 'react'
import { Route } from "react-router-dom";
import PlaylistList from './PlaylistList'
import NewPlaylist from './NewPlaylist';

class PlaylistPage extends React.Component{
    render(){
        return(
            <div>
                <Route exact path={`/playlists`} component={PlaylistList} />
                <Route path={`/playlists/new`} component={NewPlaylist}/>
            </div>
        )
    }
}

export default PlaylistPage;