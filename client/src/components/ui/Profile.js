import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateMyPassword, updateMe } from "../../_actions/authAction";

const Profile = ({
  auth: { isAuthenticated, user, loading, role },
  logout,
  history,
  updateMyPassword,
  updateMe,
}) => {
  const [formData, setFormData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const { passwordCurrent, password, passwordConfirm } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateMyPassword(formData, history);
  };
  return (
    <React.Fragment>
      <div className="add-request my-5">
        <div className="container mx-auto">
          <h1 className="lead text-center col-sm-6">Update Password</h1>
          <p className="text-warning">
            {user.data && user.data.name}, {role && role}
          </p>

          <form className="my-5" onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Current Password
              </label>
              <div className="col-sm-6">
                <input
                  type="password"
                  className="form-control"
                  name="passwordCurrent"
                  value={passwordCurrent}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-6">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  name="password"
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Confirm Password
              </label>
              <div className="col-sm-6">
                <input
                  type="password"
                  className="form-control"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-success btn-block col-sm-9"
              value="Save"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  updateMyPassword: PropTypes.func.isRequired,
  updateMe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateMyPassword, updateMe })(
  Profile
);
