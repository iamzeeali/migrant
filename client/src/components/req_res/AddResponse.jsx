import React, { useState } from "react";
import State from "../ui/State";
import { addResponse } from "../../_actions/responseAction";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AddResponse = ({ addResponse, history }) => {
  const [formData, setFormData] = useState({
    repondedBy: "",
    sourceState: "Maharashtra",
    sourceCity: "Mumbai",
    destinationState: "",
    destinationCity: "",
    localAddress: "",
    destinationAddress: "",
    travellers: "",
    travelMedium: "",
    vehicleNo: "",
    travelDate: "",
    aadharNo: "",
    description: "",
  });

  const {
    repondedBy,
    sourceState,
    sourceCity,
    destinationState,
    destinationCity,
    localAddress,
    destinationAddress,
    travellers,
    travelMedium,
    vehicleNo,
    travelDate,
    aadharNo,
    description,
  } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    addResponse(formData, history);
  };

  return (
    <React.Fragment>
      <div className="add-request my-5">
        <div className="container mx-auto">
          <h1 className="lead text-center col-sm-6">Add a Response</h1>
          <form className="my-5" onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Response By</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="repondedBy"
                  value={repondedBy}
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
              <label className="col-sm-2 col-form-label">Travel Medium</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bus, Train, Car, etc."
                  name="travelMedium"
                  value={travelMedium}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Vehicle No.</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  name="vehicleNo"
                  value={vehicleNo}
                  onChange={(e) => onChangeHandler(e)}
                />
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
              className="btn btn-success col-sm-6 btn-block"
              value="Send"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

AddResponse.propTypes = {
  addResponse: PropTypes.func.isRequired,
};

export default connect(null, { addResponse })(withRouter(AddResponse));
