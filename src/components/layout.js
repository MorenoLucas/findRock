import React from "react";
import "./artist-card.css";
import Footer from "./footer";
function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {/* si tuviera header iria aqui  */}
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
