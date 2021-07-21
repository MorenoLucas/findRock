import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SimilarArtist from "./components/similar-artist";
import Loading from "./components/loading";

import "./page-artist.css";
class PageSearchResult extends Component {
  state = {
    loading: false,
    error: null,
    busqueda: "",
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [{ "#text": "" }, { "#text": "" }, { "#text": "" }],
            },
          ],
        },
      },
    },
  };
  componentDidMount() {
    const key = "9ce37d4e7dd9ec9aff9ae74634147612";
    let artista = this.props.history.location.search.substr(1);
    this.fetchData(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artista}&api_key=${key}&format=json`
    );
  }
  // recibo los cambios del search y se lo asigno al estado busqueda
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  fetchData = async (url) => {
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({ loading: false, erorr: true });
    } else {
      this.setState({ loading: false, erorr: false, data: data });
    }
    console.log("data", data);
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <h1>Error</h1>}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[2]["#text"]}
                alt="foto artista"
                className="pic-artist margenes-50"
              ></img>
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
