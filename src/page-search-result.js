import React, { Component } from "react";
import SearchResult from "./components/search-result";
import SearchBar from "./components/search-bar";
class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search,
    });
  }
  // recibo los cambios del search y se lo asigno al estado busqueda
  changeHandle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {/* le pasamos la información al otro hijo */}
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
