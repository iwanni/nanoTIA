import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card mb-1">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Link to={"/" + 1}>
                <img
                  src="https://via.placeholder.com/150"
                  className=""
                  width="250"
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={"/" + 1}>
                  <h2 className="card-title">Card title</h2>
                </Link>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
