import React from "react";
import ArtistCard from "./artist-card";
class SimilarArtists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes-50">
          <div className="col-md-12">
            <h4>Similar artist</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="" titulo="Test" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="" />
          </div>
          <div className="col-md-3">
            <ArtistCard />
          </div>
          <div className="col-md-3">
            <ArtistCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
