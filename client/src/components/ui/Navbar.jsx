import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../_actions/authAction";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }, props) => {
  const onLogoutHandler = (e) => {
    e.preventDefault();
    logout();
  };
  const authLinks = (
    <div className="">
      <Link className="text-light btn btn-primary" to="/">
        Home
      </Link>
      <Link
        className="text-light btn btn-primary ml-auto"
        onClick={logout}
        to="/"
      >
        <i className="fa fa-unlock" aria-hidden="true"></i> Logout
      </Link>
    </div>
  );

  const guestLink = (
    <Link className="text-light btn btn-primary ml-auto" to="/login">
      Login as admin
    </Link>
  );

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        {isAuthenticated ? authLinks : guestLink}
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
