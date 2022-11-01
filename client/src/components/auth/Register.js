import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/authContext";

const Register = () => {
    const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    authContext.registerUser(user);
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1>
          Account <span className="text-primary">Sign-Up</span>
        </h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={onChange}
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            id="password2"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
