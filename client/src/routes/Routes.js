import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

//COMPONENTS
import Dashboard from "../components/dashboard/Dashboard";
import AddRequest from "../components/req_res/AddRequest";
import AddResponse from "../components/req_res/AddResponse";
import EditResponse from "../components/req_res/EditResponse";
import Requests from "../components/req_res/Requests";
import ArchiveRequests from "../components/req_res/ArchiveRequests";
import Responses from "../components/req_res/Responses";
import ResFromReq from "../components/req_res/ResFromReq";
import AddUser from "../components/user/AddUser";
import User from "../components/user/User";
import Profile from "../components/ui/Profile";

const Routes = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/requests" component={Requests} />
          <PrivateRoute exact path="/archiveReq" component={ArchiveRequests} />
          <PrivateRoute exact path="/responses" component={Responses} />
          <PrivateRoute exact path="/addResponse" component={AddResponse} />
          <PrivateRoute
            exact
            path="/editResponse/:id"
            component={EditResponse}
          />
          <PrivateRoute exact path="/resFromReq/:id" component={ResFromReq} />
          <PrivateRoute exact path="/addUser" component={AddUser} />
          <PrivateRoute exact path="/users" component={User} />
          <PrivateRoute exact path="/me" component={Profile} />
          <Route exact path="/addRequest" component={AddRequest} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Routes;
