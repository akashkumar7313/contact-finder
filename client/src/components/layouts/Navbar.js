import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/authContext'

const Navbar = ({title, icon}) => {
  const authContext = useContext(AuthContext);
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon}></i> {title}
        </Link>
      </h1>
      <ul>
        { authContext.token ? (
          <li>
            <Link onClick={() => authContext.logout()}>Logout</Link>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </Fragment>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;