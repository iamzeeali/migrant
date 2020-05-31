import React, { useEffect } from "react";
import {
  getResponses,
  deleteResponse,
  setCurrentResponse,
} from "../../_actions/responseAction";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../ui/Spinner";
import moment from "moment";

const Responses = ({
  getResponses,
  deleteResponse,
  setCurrentResponse,
  responses,
  loading,
}) => {
  useEffect(() => {
    getResponses();
    //eslint-diable-next-line
  }, []);

  const onDeleteHandler = (id) => {
    deleteResponse(id);
  };

  return (
    <React.Fragment>
      <div className="responses my-5">
        <div className="">
          <p className="lead text-center">All Responses</p>
          {responses !== null && !loading ? (
            <table class="table table-hover table-bordered table-responsive my-5">
              <thead class="table-primary">
                <tr>
                  <th scope="col">Action</th>
                  <th scope="col">Response By</th>
                  <th scope="col">Source State</th>
                  <th scope="col">Source City</th>
                  <th scope="col">Destination State</th>
                  <th scope="col">Destination City</th>
                  <th scope="col">Local Address</th>
                  <th scope="col">Destination Address</th>
                  <th scope="col">Travellers</th>
                  <th scope="col">Medium</th>
                  <th scope="col">Vehicle No</th>
                  <th scope="col">Travel Date</th>
                  <th scope="col">Aadhar No</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>

              <tbody>
                {responses.map((res) => (
                  <tr key={res._id} className="text-center">
                    <td>
                      <Link
                        to={`/editResponse/${res._id}`}
                        onClick={() => setCurrentResponse(res)}
                      >
                        <i className="fa fa-edit pr-2"></i>
                      </Link>
                      <Link
                        title="Delete"
                        to="#!"
                        onClick={() => onDeleteHandler(res._id)}
                      >
                        <i className="fa fa-trash text-danger pl-2"></i>
                      </Link>
                    </td>

                    <td>{res.respondedBy && res.respondedBy}</td>
                    <td>{res.sourceState && res.sourceState}</td>
                    <td>{res.sourceCity && res.sourceCity}</td>
                    <td>{res.destinationState && res.destinationState}</td>
                    <td>{res.destinationCity && res.destinationCity}</td>
                    <td>{res.localAddress && res.localAddress}</td>
                    <td>{res.destinationAddress && res.destinationAddress}</td>
                    <td>{res.travellers && res.travellers}</td>
                    <td>{res.travelMedium && res.travelMedium}</td>
                    <td>{res.vehicleNo && res.vehicleNo}</td>
                    <td>{moment(res.travelDate).format("DD-MM-YYYY")}</td>
                    <td>{res.aadharNo && res.aadharNo}</td>
                    <td>{res.description && res.description}</td>
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

Responses.propTypes = {
  getResponses: PropTypes.func.isRequired,
  deleteResponse: PropTypes.func.isRequired,
  setCurrentResponse: PropTypes.func.isRequired,
  responses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  responses: state.response.responses,
  loading: state.response.loading,
});
export default connect(mapStateToProps, {
  getResponses,
  deleteResponse,
  setCurrentResponse,
})(Responses);
