import React from 'react'

class NewPlaylist extends React.Component{
    //set initial state for form
    state = {}


    //Submit buton functionality
    submit = (e) => {
        e.preventDefault();
        this.props.createPlayer(this.state);
        this.setState({
          name: "",
          team: "",
          number: "",
        });
        this.props.history.push("/players");
    };

    render(){
        return(
            <div>
            <h1>Create a player</h1>
            <form onSubmit={this.submit}>

                Playlist Name:{" "}
                <input
                onChange={(e) => this.setState({ playlistnName: e.target.value })}
                type="text"
                value={this.state.playlistnName}
                />
<br/>
                Playlist Genres:{" "}
                <input
                onChange={(e) => this.setState({ playlistGenres: e.target.value })}
                type="text"
                value={this.state.playlistGenres}
                />
                <br/>
                Playlist Description:{" "}
                <input
                onChange={(e) => this.setState({ playlistDescription: e.target.value })}
                type="text"
                value={this.state.playlistDescription}
                />
<br/>
                Playlist Link:{" "}
                <input
                onChange={(e) => this.setState({ link: e.target.value })}
                type="text"
                value={this.state.link}
                />
                <br/>
                <br/>
                Curator Name:{" "}
                <input
                onChange={(e) => this.setState({ curatorName: e.target.value })}
                type="text"
                value={this.state.nacuratorNameme}
                />
                <br/>
                Curator Location:{" "}
                <input
                onChange={(e) => this.setState({ location: e.target.value })}
                type="text"
                value={this.state.location}
                />
<br/>
                Curator Email:{" "}
                <input
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                value={this.state.email}
                />
<br/>
                Curator Website:{" "}
                <input
                onChange={(e) => this.setState({ website: e.target.value })}
                type="text"
                value={this.state.website}
                />
<br/>
                Curator Facebook:{" "}
                <input
                onChange={(e) => this.setState({ facebook: e.target.value })}
                type="text"
                value={this.state.facebook}
                />
<br/>
                Curator Twitter:{" "}
                <input
                onChange={(e) => this.setState({ twitter: e.target.value })}
                type="text"
                value={this.state.twitter}
                />
<br/>
                Curator Instagram:{" "}
                <input
                onChange={(e) => this.setState({ instagram: e.target.value })}
                type="text"
                value={this.state.instagram}
                />
<br/>
                Curator Youtube:{" "}
                <input
                onChange={(e) => this.setState({ youtube: e.target.value })}
                type="text"
                value={this.state.youtube}
                />
<br/>
                Curator Reddit:{" "}
                <input
                onChange={(e) => this.setState({ reddit: e.target.value })}
                type="text"
                value={this.state.reddit}
                />
<br/>
                Curator Patreon:{" "}
                <input
                onChange={(e) => this.setState({ pareon: e.target.value })}
                type="text"
                value={this.state.patreon}
                />
<br/>
                Curator Sound Cloud:{" "}
                <input
                onChange={(e) => this.setState({ sountCloud: e.target.value })}
                type="text"
                value={this.state.soundCloud}
                />
<br/>
                Curator Submit Hub:{" "}
                <input
                onChange={(e) => this.setState({ submitHub: e.target.value })}
                type="text"
                value={this.state.submitHub}
                />
<br/>
                Curator Linked in Name:{" "}
                <input
                onChange={(e) => this.setState({ linkedIn: e.target.value })}
                type="text"
                value={this.state.linkedIn}
                />
                <br/>
                <input type="submit" value="Create Playlist" />
            </form>
            </div>        
        )
    }
}

export default NewPlaylist;