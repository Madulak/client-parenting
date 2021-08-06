import axios from "axios";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const baseUrl = 'http://localhost:8080'

export const signup = (authData) => {

    return async dispatch => {

        let response;
        try {
            response = await axios.post(baseUrl+ '/signup',authData);
            console.log('[RESPONSE] ', response.data);
        } catch (error) {
            console.log('[erroR] ', error);
            throw error;
        }
        
        dispatch({ type: SIGNUP });
    }
}

export const login = (authData) => {

    return async dispatch => {
        let response
        try {
            response = await axios.post(baseUrl + '/login', authData);
            console.log('[RESPONSE]  ', response.data);
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;
        }

        dispatch({ type: LOGIN, user: response.data.user, token: response.data.token})
    }
}

export const logout = () => {

    return dispatch => {

        dispatch({ type: LOGOUT})
    }
}