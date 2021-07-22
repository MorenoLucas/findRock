import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import "./page-home.css";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  state = {
    busqueda: "",
    modal: false,
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
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
            <img id="logo" src={Logo} alt="Logo" />
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
                <button className="btng" onClick={this.handleClick}>
                  Lucas
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Lucas Front-End Developer</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}
export default PageHome;
