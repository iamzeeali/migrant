import React, { useEffect } from "react";
import { getUsers } from "../../_actions/authAction";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../ui/Spinner";
import moment from "moment";

const Users = ({ getUsers, users, loading }) => {
  useEffect(() => {
    getUsers();
    //eslint-diable-next-line
  }, [getUsers]);

  return (
    <React.Fragment>
      <div className="responses my-5">
        <div className="">
          <Link to="/addUser" className="btn btn-primary">
            Add user
          </Link>
          <p className="lead text-center">All Users</p>
          {users !== null && !loading ? (
            <table class="table table-hover table-bordered table-responsive my-5">
              <thead class="table-primary">
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>

              <tbody>
                {users.map((usr) => (
                  <tr key={usr._id} className="text-center">
                    <td>{usr.name && usr.name}</td>
                    <td>{usr.email && usr.email}</td>
                    <td>{usr.role && usr.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {
  getUsers,
})(Users);
