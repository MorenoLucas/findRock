import React, { Component } from "react";
import PageSearchResult from "../src/page-search-result";
import PageHome from "../src/page-home";

import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHome />
      </React.Fragment>
    );
  }
}

export default App;
