import React from "react";
import ArtistCard from "./artist-card";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends React.Component {
  state = {
    loading: false,
    data: { results: [] },
  };
  componentDidMount() {
    this.fetchData("https://pokeapi.co/api/v2/pokemon?limit=151'");
  }
  fetchData = async (url) => {
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    this.setState({ loading: false, data: data });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <h1>Loading</h1>}
        <div className="container">
          <div className="row">
            {this.state.data.results.map((item, i) => {
              return (
                <ArtistCard
                  img={`https://pokeres.bastionbot.org/images/pokemon/${
                    i + 1
                  }.png`}
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
