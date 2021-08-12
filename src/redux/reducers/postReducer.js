import { GET_POSTS, POST_DELETE } from "../actions/postActions";

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case POST_DELETE:
            const newData = state.posts.filter(el => el._id !== action.deleteId);
            return {
                ...state,
                posts: newData,
            }

        default:
            return state;
    }
    
}

export default postReducer;