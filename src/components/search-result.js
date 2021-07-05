import React from "react";
import ArtistCard from "./artist-card";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/* Props  se ponen como atributos*/}
            <ArtistCard
              img="https://www.mehaceruido.com/wp-content/uploads/2020/06/Bandalos-Chinos-slide.jpg"
              title="Banda Los chinos"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
