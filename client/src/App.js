import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <ContactState>
      <AuthState>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exacr path="/register" element={<Register />} />
              <Route exacr path="/login" element={<Login />} />
            </Routes>
          </Fragment>
        </Router>
      </AuthState>
    </ContactState>
  );
};

export default App;
