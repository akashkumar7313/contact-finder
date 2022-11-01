import React, { useReducer } from "react";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../types";
import { AuthContext } from "./authContext";
import authReducer from "./authReducer";
import axios from 'axios';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async user => {
    const config = {
        'Content-Type': 'application/json'
    };
    try{
        const res = await axios.post('http://localhost:4001/api/users', user, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data
        });
    }
  };

  const loginUser = async user => {
    const config = {
        'Content-Type': 'application/json'
    };
    try{
        const res = await axios.post('http://localhost:4001/api/auth', user, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data,
        });
    }
  }

  const logout = () => {
    dispatch({
        type: LOGOUT
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
