import React, { useState, useEffect } from "react";
import State from "../ui/State";
import {
  editResponse,
  getCurrentResponse,
} from "../../_actions/responseAction";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

const EditResponse = ({
  editResponse,
  getCurrentResponse,
  history,
  response,
  match,
  loading,
}) => {
  const [formData, setFormData] = useState({
    respondedBy: "",
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
    respondedBy,
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

  useEffect(() => {
    getCurrentResponse(match.params.id);
    setFormData({
      ...formData,
      respondedBy: loading || !response.respondedBy ? "" : response.respondedBy,

      sourceCity: loading || !response.sourceCity ? "" : response.sourceCity,
      destinationState:
        loading || !response.destinationState ? "" : response.destinationState,
      destinationCity:
        loading || !response.destinationCity ? "" : response.destinationCity,
      localAddress:
        loading || !response.localAddress ? "" : response.localAddress,
      destinationAddress:
        loading || !response.destinationAddress
          ? ""
          : response.destinationAddress,
      destinationAddress:
        loading || !response.destinationAddress
          ? ""
          : response.destinationAddress,
      travellers: loading || !response.travellers ? "" : response.travellers,
      travelMedium:
        loading || !response.travelMedium ? "" : response.travelMedium,
      vehicleNo: loading || !response.vehicleNo ? "" : response.vehicleNo,
      travelDate:
        loading || !response.travelDate
          ? ""
          : moment(response.travelDate).format("DD-MM-YYYY"),
      aadharNo: loading || !response.aadharNo ? "" : response.aadharNo,
      description: loading || !response.description ? "" : response.description,
    });
    //eslint-diable-next-line
  }, []);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    editResponse(formData, history, match.params.id);
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
                  name="respondedBy"
                  value={respondedBy}
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

const mapStateToProps = (state) => ({
  response: state.response.response,
  loading: state.response.loading,
});

EditResponse.propTypes = {
  editResponse: PropTypes.func.isRequired,
  getCurrentResponse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { editResponse, getCurrentResponse })(
  withRouter(EditResponse)
);
