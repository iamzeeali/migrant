import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
      <div className="landig d-flex align-items-center min-vh-90 text-center py-5">
        <div className="container">
          <img
            src="https://imagevars.gulfnews.com/2020/05/12/Sonu-Sood_172091f01e3_medium.jpg"
            alt="sonu_sood"
            width="80%"
            className="border border-primary p-2 mb-4"
          />
          <p className="lead">
            An initiative to help migrant workers reach home safely to their
            loved ones, inspired by the work of bollywood actor{" "}
            <span className="text-primary">Sonu Sood</span>
          </p>
          <p>
            You can request an arrangement for yourself or on behalf of people
            who are stuck somewhere away from their homes because of various
            reasons.
          </p>
          <Link className="btn btn-outline-light mb-5" to="/addRequest">
            <i class="fa fa-plus-square fa-2x my-2" aria-hidden="true"></i>
            <br />
            Click to Request
          </Link>
          <br />
          <small>
            App developed by <a href="http://globuslabs.com">Globus Labs</a>
          </small>
        </div>
      </div>
    </React.Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
