import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

class Post extends Component {
  render() {
    const { post } = this.props;

    const singlePost = post ? (
      <div className="container">
        <h2>{post.seo.title}</h2>
        <p>
          {post.date_gmt} by {post.author.display_name}
        </p>
        <div className="text-center">
          <img
            src={post.featured_image.source}
            class="img-fluid"
            width="600"
            alt={post.seo.title}
          />
        </div>
        <div className="mt-3 p-5">
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
        <Link to="/" className="btn btn-light mb-3">
          Back
        </Link>
      </div>
    ) : (
        <div className="center">Loading post...</div>
      );
    return <div className="container">{singlePost}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Post);
