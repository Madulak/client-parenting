import { LOGIN } from "../actions/authActions";

const initialState = {
    isAuth: false,
    user: null,
    token: null,
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case LOGIN:
            return {
                isAuth: true,
                user: action.user, 
                token: action.token
            }

        default:
            return state;
    }
}

export default authReducer;