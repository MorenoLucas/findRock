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
          {/* para que sea extact  */}
          <Route exact path="/busqueda" component={PageSearchResult}></Route>
          <Route path="/artista" component={PageArtist}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
