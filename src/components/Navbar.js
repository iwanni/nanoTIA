import React from "react";
import Techinasia from "../assets/techinasia.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">
          <img src={Techinasia} width="150" alt="techinasia logo" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
