import { combineReducers } from "redux";
import { blogReducer, selectedBlogReducer } from "./blogReducer";

const reducers = combineReducers({
    allBlogs:blogReducer,
    blog:selectedBlogReducer,
});

export default reducers;