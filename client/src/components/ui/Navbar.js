import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../_actions/authAction";

const Navbar = (
  { auth: { isAuthenticated, loading, role }, logout },
  props
) => {
  const onLogoutHandler = (e) => {
    e.preventDefault();
    logout();
  };
  const authLinks = (
    <React.Fragment>
      <Link className="text-light mr-3" to="/">
        Home
      </Link>
      <Link className="text-light mr-3" to="/me">
        Profile
      </Link>
      <Link className="text-light" to="/users">
        Users
      </Link>
      <Link
        className="text-light btn btn-primary ml-auto"
        onClick={logout}
        to="/"
      >
        <i className="fa fa-unlock" aria-hidden="true"></i> Logout
      </Link>
    </React.Fragment>
  );

  const adminLinks = (
    <React.Fragment>
      <Link className="text-light mr-3" to="/">
        Home
      </Link>
      <Link className="text-light mr-3" to="/me">
        Profile
      </Link>

      <Link
        className="text-light btn btn-primary ml-auto"
        onClick={logout}
        to="/"
      >
        <i className="fa fa-unlock" aria-hidden="true"></i> Logout
      </Link>
    </React.Fragment>
  );

  const guestLinks = (
    <Link className="text-light btn btn-primary ml-auto" to="/login">
      Login
    </Link>
  );

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        {isAuthenticated && role === "super-admin"
          ? authLinks
          : isAuthenticated && role === "admin"
          ? adminLinks
          : guestLinks}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
