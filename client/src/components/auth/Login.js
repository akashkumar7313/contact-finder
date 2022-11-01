import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth/authContext';

const Login = () => {
    const authContext = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e => {
        e.preventDefault();
        authContext.loginUser(user);
    }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1>
          Account <span className="text-primary">Sign-In</span>
        </h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Sign In"
          />
        </div>
      </form>
    </div>
  );
}

export default Login