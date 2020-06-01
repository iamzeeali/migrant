import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequests } from "../../_actions/requestAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ getRequests, results }) => {
  useEffect(() => {
    getRequests();
    //eslint-diable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-sm-4 my-5 border border-secondary py-2 ">
            <Link to="/requests">
              <i class="fa fa-list fa-4x my-2" aria-hidden="true"></i>
              <br />
              All Requests{" "}
              <span class="badge badge-primary">{results && results}</span>
            </Link>
          </div>

          <div className="col-sm-4 my-5 border border-secondary py-2 ">
            <Link to="/addResponse">
              <i class="fa fa-plus-square fa-4x my-2" aria-hidden="true"></i>
              <br />
              Add a Departure
            </Link>
          </div>

          <div className="col-sm-4 my-5 border border-secondary py-2 ">
            <Link to="/responses">
              <i class="fa fa-list fa-4x my-2" aria-hidden="true"></i>
              <br />
              Sent Migrants
            </Link>
          </div>
        </div>
      </div>

      <Link
        className="my-1 text-right border border-primary p-2"
        to="/archiveReq"
      >
        {" "}
        <small>
          <i class="fa fa-list" aria-hidden="true"></i> Archived Requests
        </small>
      </Link>
      <div className="footer text-center">
        <p>
          App developed by <a href="http://www.globuslabs.com">Globus Labs</a>
        </p>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = { getRequests: PropTypes.func.isRequired };

const mapStateToProps = (state) => ({
  results: state.request.results,
});
export default connect(mapStateToProps, { getRequests })(Dashboard);
