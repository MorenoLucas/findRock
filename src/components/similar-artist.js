import React from "react";
import ArtistCard from "./artist-card";
class SimilarArtists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4>Similar artist</h4>
        <hr />
        <ArtistCard img="" />
        <ArtistCard img="" />
        <ArtistCard />
        <ArtistCard />
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
