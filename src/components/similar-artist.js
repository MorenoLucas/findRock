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
          {this.props.data.slice(0, 4).map((artist, index) => {
            return (
              <ArtistCard
                img={artist.image[2]["#text"]}
                title={artist.name}
                key={index}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
