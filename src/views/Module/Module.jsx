import React from "react";
import {Route, withRouter, Switch} from "react-router-dom";

import Page from "../../components/Page/Page";
import View from "./ViewModule/View";
import User from "../../services/auth/user";
import EditForm from "./EditModule/Edit";
import {useQuery} from '../../services/forms/Hooks'

const Module = ({match}) => {
  let query = useQuery()

  return (
    // TODO: replace heading with name of module
    <Page heading="Module">
      <Switch>
      <Route
        exact
        path={`${match.path}/:id/edit`}
        render={props => <EditForm type={"Edit"} id={match.params.id} />}
      />
      <Route
        exact
        path={`${match.path}/create`}
        render={props => <EditForm type={"Create"}/>}
      />
      <Route
        exact
        path={`${match.path}/:id/form`}
        render={props => <View id={match.params.id} />}
      />
      </Switch>
    </Page>
  );
};

export default withRouter(Module);
// determines what to render based on path
