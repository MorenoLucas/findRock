import React, { Component } from "react";
import PageSearchResult from "../src/page-search-result";
import PageHome from "../src/page-home";
import PageArtist from "../src/page-artist";
import Footer from "../src/components/footer";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Footer>
          <Switch>
            {/* para que sea extact  */}
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default App;
