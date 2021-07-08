import React from "react";
import { Link } from "react-router-dom";

import "./page-home.css";
class PageHome extends React.Component {
  state = {
    busqueda: "",
  };
  handldeSubmit = (e) => {
    e.preventDefault();
    this.props.history.Push("/busqueda" + this.state.busqueda);
  };
  onChange = (e) => {
    this.setState({ busqueda: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <h1 id="logo">LOGO</h1>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  name="busqueda"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  // le mando al padre los cambios del input
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <Link to={"/busqueda?" + this.state.busqueda}>
                  <button className="btng" type="submit">
                    Search
                  </button>
                </Link>
                <button className="btng">Lucas</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHome;
