import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={`/artista?${this.props.title}`}>
          <div className="item">
            {/* Los props se llaman asi y se pone como atributo en el componente */}
            <img
              src={this.props.img}
              alt="foto de grupo"
              className="pic img-fluid"
            ></img>
            <p className="titulo">{this.props.title}</p>
          </div>
        </Link>
      </div>
    );
  }
}
export default ArtistCard;
