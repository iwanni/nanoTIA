import axios from "axios";

export function getAllPosts() {
  return dispatch => {
    return axios
      .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts")
      .then(res => {
        //console.log(res, "props");
        dispatch(getPosts(res));
      });
  };
}

export function getPosts(res) {
  return {
    type: "GET_POSTS",
    posts: res
  };
}
