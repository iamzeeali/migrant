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
          <div className="col">
            <img
              src="https://celebritytadka.com/wp-content/uploads/2020/05/sonu-sood.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div className="col">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/RTS375B8.jpeg?WiXTYOD_ceRFha5EUgrE4vuPQgy3Ewiw"
              alt=""
              width="100%"
            />
          </div>
        </div>

        <div className="row text-center">
          <div className="col-sm-4 my-5">
            <Link to="/requests">
              <i class="fa fa-list fa-4x my-2" aria-hidden="true"></i>
              <br />
              All Requests{" "}
              <span class="badge badge-primary">{results && results}</span>
            </Link>
          </div>

          <div className="col-sm-4 my-5">
            <Link to="/addResponse">
              <i class="fa fa-plus-square fa-4x my-2" aria-hidden="true"></i>
              <br />
              Add a Response
            </Link>
          </div>

          <div className="col-sm-4 my-5">
            <Link to="/responses">
              <i class="fa fa-list fa-4x my-2" aria-hidden="true"></i>
              <br />
              All Responses
            </Link>
          </div>
        </div>
      </div>

      <div className="footer text-center">
        <small>
          App developed by <a href="http://www.globuslabs.com">Globus Labs</a>
        </small>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = { getRequests: PropTypes.func.isRequired };

const mapStateToProps = (state) => ({
  results: state.request.results,
});
export default connect(mapStateToProps, { getRequests })(Dashboard);
