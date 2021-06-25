import React, { Component } from "react";
import ArtistCard from "../src/components/artist-card";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArtistCard />;
        </div>
      </div>
    );
  }
}

export default App;
