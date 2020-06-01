import React, { useEffect } from "react";
import {
  allRequests,
  deleteRequest,
  setCurrentRequest,
} from "../../_actions/requestAction";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../ui/Spinner";
import moment from "moment";
import ReactToExcel from "react-html-table-to-excel";

const ArchiveRequests = ({
  allRequests,
  deleteRequest,
  setCurrentRequest,
  all,
  loading,
}) => {
  useEffect(() => {
    allRequests();
    //eslint-diable-next-line
  }, []);

  const onDeleteHandler = (id) => {
    deleteRequest(id);
  };

  return (
    <React.Fragment>
      <div className="requests my-5">
        <div className="">
          <p className="lead text-center">Archived Requests</p>
          <ReactToExcel
            className=" btn btn-primary "
            table="request-table" // id of table which you want to export
            filename={`request-${Date.now()}`} // name of the file
            sheet="sheet"
            buttonText="Export Table" // button name
          />
          {all !== null && !loading ? (
            <table
              class="table table-hover table-bordered table-responsive my-5"
              id="request-table"
            >
              <thead class="table-primary">
                <tr>
                  <th scope="col">Action</th>
                  <th scope="col">Added on</th>
                  <th scope="col">Responded</th>
                  <th scope="col">Request By</th>
                  <th scope="col">Source State</th>
                  <th scope="col">Source City</th>
                  <th scope="col">Destination State</th>
                  <th scope="col">Destination City</th>
                  <th scope="col">Local Address</th>
                  <th scope="col">Destination Address</th>
                  <th scope="col">Travellers</th>
                  <th scope="col">Phone 1</th>
                  <th scope="col">Phone 2</th>
                  <th scope="col">Travel Date</th>
                  <th scope="col">Aadhar No</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>

              <tbody>
                {all.map((req) => (
                  <tr key={req._id} className="text-center">
                    <td>
                      <Link
                        to={`/resFromReq/${req._id}`}
                        onClick={() => setCurrentRequest(req)}
                      >
                        <i className="fa fa-plus-circle pr-2"></i>
                      </Link>
                      <Link
                        title="Delete"
                        to="#!"
                        onClick={() => onDeleteHandler(req._id)}
                      >
                        <i className="fa fa-trash text-danger pl-2"></i>
                      </Link>
                    </td>
                    <td>{moment(req.createdAt).format("DD-MM-YYYY")}</td>

                    <td>
                      {req.responded ? (
                        <i
                          class="fa fa-check-circle fa-lg text-success"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          class="fa fa-times-circle fa-lg text-danger"
                          aria-hidden="true"
                        ></i>
                      )}
                    </td>
                    <td>{req.requestBy && req.requestBy}</td>
                    <td>{req.sourceState && req.sourceState}</td>
                    <td>{req.sourceCity && req.sourceCity}</td>
                    <td>{req.destinationState && req.destinationState}</td>
                    <td>{req.destinationCity && req.destinationCity}</td>
                    <td>{req.localAddress && req.localAddress}</td>
                    <td>{req.destinationAddress && req.destinationAddress}</td>
                    <td>{req.travellers && req.travellers}</td>
                    <td>{req.phone1 && req.phone1}</td>
                    <td>{req.phone2 && req.phone2}</td>
                    <td>{moment(req.travelDate).format("DD-MM-YYYY")}</td>
                    <td>{req.aadharNo && req.aadharNo}</td>
                    <td>{req.description && req.description}</td>
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

ArchiveRequests.propTypes = {
  allRequests: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  setCurrentRequest: PropTypes.func.isRequired,
  requests: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  all: state.request.all,
  loading: state.request.loading,
});
export default connect(mapStateToProps, {
  allRequests,
  deleteRequest,
  setCurrentRequest,
})(ArchiveRequests);
