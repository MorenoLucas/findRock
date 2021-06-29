import React, { Component } from "react";
import SearchResult from "./components/search-result";
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
        <SearchBar onChange={this.changeHandle} />
        {/* le pasamos la información al otro hijo */}
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
