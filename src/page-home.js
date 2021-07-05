import React from "react";
import "./page-home.css";
class PageHome extends React.Component {
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
                  onChange={this.props.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng">Search</button>
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
