import React, { Component } from "react";
import ArtistCard from "../src/components/artist-card";
import SearchBar from "../src/components/search-bar";

import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            {/* Props  se ponen como atributos*/}
            <ArtistCard
              img="https://www.mehaceruido.com/wp-content/uploads/2020/06/Bandalos-Chinos-slide.jpg"
              title="Banda Los chinos"
            />
            <ArtistCard
              img="data:image/jpeg;base64,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"
              title="No Te Va Gustar"
            />
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default App;
