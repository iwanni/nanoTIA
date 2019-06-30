import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    const { posts } = this.props;
    console.log(posts, "props");

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="card mb-1">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Link to={"/" + post.id}>
                  <img
                    src={post.featured_image.source}
                    className=""
                    width="350"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Link to={"/" + post.id}>
                    <h2 className="card-title">{post.seo.title}</h2>
                  </Link>
                  <p className="card-text">
                    {post.seo.description}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{post.author.display_name}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
        <div className="center">No posts yet</div>
      );

    console.log(posts, "laststate")
    return (
      <div onLoad={this.props.getAllPosts} className="container">
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Posts);
