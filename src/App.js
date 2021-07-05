import React, { Component } from "react";
import PageSearchResult from "../src/page-search-result";
import PageHome from "../src/page-home";
import PageArtist from "../src/page-artist";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/busqueda" Component={PageSearchResult}></Route>
          <Route path="/artista" Component={PageArtist}></Route>
          <Route path="/" Component={PageHome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
