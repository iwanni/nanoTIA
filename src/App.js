import React from "react";
//import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Posts} />
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
