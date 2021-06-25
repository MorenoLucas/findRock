import React from "react";
import "./artist-card.css";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="item">
        <img
          src="https://historico.crazyminds.es/wp-content/uploads/Bandalos-Chinos-Crazyminds.es_.jpg"
          className="pic"
        ></img>
        <p className="titulo">Banda Los Chinos</p>
      </div>
    );
  }
}
export default ArtistCard;
