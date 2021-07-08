import React from "react";
import ArtistCard from "./artist-card";
import Loading from "./loading";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends React.Component {
  state = {
    loading: false,
    error: null,
    data: { results: [] },
  };
  componentDidMount() {
    this.fetchData("https://pokeapi.co/api/v2/pokemon?limit=151'");
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
