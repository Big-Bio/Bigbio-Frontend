import React from "react";
import {Route, withRouter} from "react-router-dom";

import Page from "../../components/Page/Page";
import User from "../../services/auth/user";
import EditForm from "./EditModule/Edit";

const Module = ({match}) => {
  return (
    // TODO: replace heading with name of module
    <Page heading="Module">
      <Route
        exact
        path={`${match.path}/edit`}
        render={props => <EditForm type={"Edit"} id={match.params.id} />}
      />
      <Route
        exact
        path={`${match.path}/create`}
        render={props => <EditForm type={"Create"} id={match.params.id} />}
      />
      <Route
        exact
        path={`${match.path}/view`}
        render={props => <EditForm id={match.params.id} />}
      />
    </Page>
  );
};

export default withRouter(Module);
// determines what to render based on path
