import React from "react";
import "./search-bar.css";
// import Logo from "../logo.svg";
import { Link } from "react-router-dom";

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
          <div className="col-md-2">
            <Link to="/">Logo</Link>
          </div>
          <div className="col-md-4">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  className="form-control"
                  name="busqueda"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  // le mando al padre los cambios del input
                  onChange={this.props.onChange}
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
