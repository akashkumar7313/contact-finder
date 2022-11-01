import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                error: null
            };
        case REGISTER_FAIL:
            return {
                ...state,
                token: '',
                loading: true,
                error: action.payload.message   
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                error: null
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: '',
                loading: true,
                error: action.payload.message   
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
              token: null,
              isAuthenticated: null,
              loading: true,
              user: null,
              error: null,
            };
        default:
            return state;
    }
}