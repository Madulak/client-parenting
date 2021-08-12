import axios from "axios";

export const CREATE_POST = 'CREATE_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const GET_POSTS = 'GET_POSTS';
export const GET_ONE_POST = 'GET_ONE_POST';
export const POST_DELETE = 'POST_DELETE';

const baseUrl = 'http://localhost:8080'

export const create_post = (postData) => {

    return async (dispatch, getState) => {
        const getToken = getState().auth.token;
        const getUser = getState().auth.user.username;
        const config = {
            headers: {
                Authorization: 'bearer '+ getToken,
            }
        }
        let response;
        try {
            response = await axios.post(baseUrl+'/newpost',  postData, config);
            console.log('[RETURN POST] ', response.data);
        } catch (error) {
            console.log('[ERROR 101] ', error);
            throw error;
        }

        const newPost = {
            ...postData,
            username: getUser,
        }

        dispatch({ type: CREATE_POST, newPost})
    }
}

export const create_comment = (commentData) => {

    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: 'bearer '+ token,
            }
        }
        let response;
        try {
            response = await axios.post(baseUrl + '/comment', config, commentData);
            console.log('[Response Comment] ', response.data); 
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;
        }

        dispatch({ type: CREATE_COMMENT})
    }
}

export const get_posts = () => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(baseUrl + '/posts')
            console.log('[rESPONSe] ', response.data);
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;
        }

        dispatch({ type: GET_POSTS, posts: response.data.data})
    }
}

export const get_one_post = (id) => {

    return async dispatch => {

        let response;
        try {
            response = await axios.get(baseUrl + '/post/'+id);
            console.log('[RESPONSE One] ', response.data);
        } catch (error) {
            console.log('[ResponSE] ', error);
            throw error;
        }

        dispatch({ type: GET_ONE_POST})
    }
}

export const post_delete = (id) => {

    return async dispatch => {
        let response;
        try {
           response = await axios.delete(baseUrl+'/delete/post/'+id);
           console.log('[DELETE] Compolete ', response.data); 
        } catch (error) {
            console.log('[ERRorRR] ', error);
            throw error;
        }

        dispatch({ type: POST_DELETE, deleteId: id})
    }
}