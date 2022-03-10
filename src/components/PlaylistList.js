import React from "react";

// Redux
import { connect } from "react-redux";

// Components
import PlaylistCard from "./PlaylistCard";

//actions
import { getPlaylists } from "../redux/PlaylistStore/Actions";

class PlaylistList extends React.Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    return (
      <div>
        <nav>
          <a type="button" className="btn btn-primary" href="/playlists/new">
            Create New Playlist
          </a>
        </nav>

        <div className="row">
          <div className="col-10 offset-1">
            <div className="row show-box" id="list">
              {this.props.playlists != undefined
                ? this.props.playlists.map((playlist) => (
                    <PlaylistCard playlist={playlist} />
                  ))
                : "LoadingZZZZ"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ playlists }) => {
  return {
    playlists: playlists,
  };
};

export default connect(mapStateToProps, { getPlaylists })(PlaylistList);
