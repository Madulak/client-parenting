import axios from "axios";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

const baseURl = 'http://localhost:8080'

export const signup = (authData) => {

    return async dispatch => {

        let response;
        try {
            response = await axios.post(baseURl+ '/signup',authData);
            console.log('[RESPONSE] ', response.data);
        } catch (error) {
            console.log('[erroR] ', error);
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
        }

        dispatch({ type: LOGIN})
    }
}