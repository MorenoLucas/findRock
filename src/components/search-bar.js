import React from "react";
import "./search-bar.css";
// import Logo from "../logo.svg";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    //   me da el valor del evento
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">Logo </div>
          <div className="col-md-4">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  className="form-control"
                  name="busqueda"
                  id="buscar"
                  value={this.state.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
export default SearchBar;
