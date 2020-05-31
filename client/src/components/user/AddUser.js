import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../_actions/authAction";

const AddUser = ({ addUser, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUser(formData, history);
  };

  return (
    <React.Fragment>
      <div className="add-request my-5">
        <div className="container mx-auto">
          <h1 className="lead text-center col-sm-6">Add an user</h1>
          <form className="my-3" onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-4">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-4">
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
              <label className="col-sm-2 col-form-label">
                Confirm Password
              </label>
              <div className="col-sm-4">
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
              className="btn btn-success btn-block col-sm-6"
              value="Save"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

AddUser.propTypes = {
  auth: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addUser })(withRouter(AddUser));
