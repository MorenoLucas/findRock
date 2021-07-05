import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SimilarArtists from "./components/similar-artists";
import "./page-artist.css";
class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  // recibo los cambios del search y se lo asigno al estado busqueda
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img className="pic-artist margenes-50"></img>
              <h2>Nombre</h2>
              <p>lorem ipsum dolor sit am</p>
              <SimilarArtists />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
