import React, { useState } from "react";
import State from "../ui/State";
import { addRequest } from "../../_actions/requestAction";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AddRequest = ({ addRequest, history }) => {
  const [formData, setFormData] = useState({
    requestBy: "",
    sourceState: "Maharashtra",
    sourceCity: "Mumbai",
    destinationState: "",
    destinationCity: "",
    localAddress: "",
    destinationAddress: "",
    travellers: "",
    phone1: "",
    phone2: "",
    travelDate: "",
    aadharNo: "",
    description: "",
  });

  const {
    requestBy,
    sourceState,
    sourceCity,
    destinationState,
    destinationCity,
    localAddress,
    destinationAddress,
    travellers,
    phone1,
    phone2,
    travelDate,
    aadharNo,
    description,
  } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    addRequest(formData, history);
  };

  return (
    <React.Fragment>
      <div className="add-request my-5">
        <div className="container mx-auto">
          <h1 className="lead text-center">Send a Request</h1>
          <form className="my-3" onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Request By</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="requestBy"
                  value={requestBy}
                  onChange={(e) => onChangeHandler(e)}
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Source State</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  value="Maharashtra"
                  disabled
                  name="sourceState"
                  value={sourceState}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Source City</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  value="Mumbai"
                  disabled
                  name="sourceCity"
                  value={sourceCity}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Local Address</label>
              <div className="col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  name="localAddress"
                  value={localAddress}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>
            <hr />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Destination State
              </label>
              <div className="col-sm-4">
                <State
                  name="state"
                  name="destinationState"
                  value={destinationState}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Destination City
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="destinationCity"
                  value={destinationCity}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Destination Address
              </label>
              <div className="col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  name="destinationAddress"
                  value={destinationAddress}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <hr />

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Travellers</label>
              <div className="col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Rahul Kumar, Harpreet singh, Asif Khan"
                  name="travellers"
                  value={travellers}
                  onChange={(e) => onChangeHandler(e)}
                />
                <small className="form-text text-muted">
                  enter comma separated values
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone 1</label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  name="phone1"
                  value={phone1}
                  onChange={(e) => onChangeHandler(e)}
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone 2</label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  name="phone2"
                  value={phone2}
                  onChange={(e) => onChangeHandler(e)}
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Aadhar No</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="aadharNo"
                  value={aadharNo}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Travel Date</label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  name="travelDate"
                  value={travelDate}
                  onChange={(e) => onChangeHandler(e)}
                />{" "}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-success btn-block"
              value="Send"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

AddRequest.propTypes = {
  addRequest: PropTypes.func.isRequired,
};

export default connect(null, { addRequest })(withRouter(AddRequest));
