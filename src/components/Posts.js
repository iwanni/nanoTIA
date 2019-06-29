import React, { Component } from "react";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card mb-1">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className=""
                width="250"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Card title</h2>
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
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className=""
                width="250"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Card title</h2>
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
