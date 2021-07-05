import React from "react";
import "./artist-card.css";
function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <div className="row">
        <div className="col-md-12 centrar">
          <p>Copyright Lucky 2021</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
