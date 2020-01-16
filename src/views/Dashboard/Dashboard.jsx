import React from "react";
import {withRouter} from "react-router-dom";
import Page from "../../components/Page/Page";
import {Heading} from "../../components/Text/text";
import Auth from "../../services/auth/auth";
import ModuleDir from "./components/ModuleDir/ModuleDir";
import FavoriteDir from "./components/FavoriteDir/FavoriteDir";
import MiniModuleDir from "./components/AdminDir/ModuleDir";
import PendingDir from "./components/AdminDir/PendingDir";

import User from "../../services/auth/user";
// https://css-tricks.com/fetching-data-in-react-using-react-async/
// render dashboard asynchronously

const Dashboard = props => {
  // get modules
  const userRole = User.getRole();
  const name = User.getName();
  const logout = (
    <button
      onClick={() => {
        props.logout();
      }}
    >
      logout
    </button>
  );

  if (userRole == 3) {
    return (
      <Page heading="Admin Dashboard">
        <div>
          <Heading>Your Modules</Heading>
          <MiniModuleDir />
        </div>
        <div>
          <Heading>Pending Modules</Heading>
          <PendingDir />
        </div>
        {logout}
      </Page>
    );
  } else if (userRole == 2) {
    return (
      <Page heading="Dashboard">
        <div>
          <Heading>Your Modules</Heading>
          <ModuleDir />
        </div>
        {logout}
      </Page>
    );
  } else {
    return (
      <Page heading={`${name}'s Dashboard`}>
        <div>
          <Heading>Your Favorites</Heading>
          <FavoriteDir />
        </div>
        {logout}
      </Page>
    );
  }
};

export default withRouter(Dashboard);
