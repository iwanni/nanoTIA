import React from "react";
import Techinasia from "../assets/techinasia.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="">
          <img src={Techinasia} width="150" alt="techinasia logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
