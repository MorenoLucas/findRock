import React from "react";
import ArtistCard from "./artist-card";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends React.Component {
  state = { data: "" };
  componentDidMount() {
    this.fetchData("https://pokeapi.co/api/v2/pokemon/");
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/* Props  se ponen como atributos*/}
            <ArtistCard
              img="https://www.mehaceruido.com/wp-content/uploads/2020/06/Bandalos-Chinos-slide.jpg"
              title="Banda Los chinos"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
