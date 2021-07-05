import React, { Component } from "react";
import SearchBar from "./components/search-bar";

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
            <div className="col-md-6">
              <img className="pic"></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
