import React from "react";
import ArtistCard from "./artist-card";
import Loading from "./loading";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    const key = "9ce37d4e7dd9ec9aff9ae74634147612";
    // this.fetchData("https://pokeapi.co/api/v2/" + termino);
    this.fetchData(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=${key}&format=json`
    );
  }

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
        {this.state.loading && <Loading />}
        {this.state.error && <h1>Error</h1>}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[3]["#text"]}
                  title={item.name}
                  key={i}
                />
              );
            })}
            {/* Props  se ponen como atributos*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
