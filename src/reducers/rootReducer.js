const initState = { posts: [] };

const rootReducer = (state = initState, action) => {
  if (action.type === "GET_POSTS") {
    //console.log(action.posts.data.posts);
    return {
      ...state,
      posts: action.posts.data.posts.slice(0, 10)
    };
  }
  return state;
};

export default rootReducer;
