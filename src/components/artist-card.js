import React from "react";
import "./artist-card.css";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          {/* Los props se llaman asi y se pone como atributo en el componente */}
          <img
            src={this.props.img}
            alt="foto de grupo"
            className="pic img-fluid"
          ></img>
          <p className="titulo">{this.props.title}</p>
        </div>
      </div>
    );
  }
}
export default ArtistCard;
