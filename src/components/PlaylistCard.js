const PlaylistCard = (props) => {
  return (
    <div className="margin-wraper col-md-4">
      <div className=" show-card card">
        <div className="card-body">
          <h5 className="card-title">{props.playlist.name}</h5>
          <p>
            Description:
            <span>{props.playlist.description}</span>
          </p>
          <p>
            <em>by: {props.playlist.curator}</em>
          </p>
          <p>followers : {props.playlist.followers}</p>
          <p>Songs: {props.playlist.songs}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
