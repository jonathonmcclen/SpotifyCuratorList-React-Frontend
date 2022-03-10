const PlaylistCard = () => {
  return (
    <div className="margin-wraper col-md-4">
      <div className=" show-card card">
        <div className="card-body">
          <h5 className="card-title">Playlist name</h5>
          <p>
            Description:
            <span>
              Venue Description...Some quick example text to build on the card
              title and make up the bulk of the card's content.
            </span>
          </p>
          <p>
            <em>1/01/2022</em>
          </p>
          <p>Capacity: 15/60</p>
          <a href="/show" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
