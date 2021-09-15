import { ActionTypes } from '../contants/actionTypes';

export const setBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_BLOGS,
        payload: blogs,
    }
}

export const selectedBlog = (blog) => {
    return {
        type: ActionTypes.SELECTED_BLOG,
        payload: blog,
    }
}