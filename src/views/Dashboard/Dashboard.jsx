import React, { useEffect, useState } from "react";
import {withRouter} from "react-router-dom";
import Page from "../../components/Page/Page";
import {Heading, Title} from "../../components/Text/text";
import Button from "../../components/Button/PrimaryButton";

import ModuleDir from "./components/ModuleDir/ModuleDir";
import FavoriteDir from "./components/FavoriteDir/FavoriteDir";
import PendingDir from "./components/AdminDir/PendingDir";

import User from "../../services/auth/user";
// https://css-tricks.com/fetching-data-in-react-using-react-async/
// render dashboard asynchronously

const Dashboard = props => {
  // get modules
  // const userRole = User.getRole();
  const userRole = 10;
  const name = User.getName();

  // TODO: change this to reuse as much code as possible <Page ...
  // change back to 3 once done with development
  if (userRole == 3) {
    return (
      <Page heading="Admin Dashboard">
        <div>
        <div>
          <Title>Pending Modules</Title>
          <PendingDir />
        </div>
        <div>
          <Title>Your Modules</Title>
          <ModuleDir/>
        </div>
        </div>
      </Page>
    );
  } else if (userRole == 1) {
    return (
      <Page heading="Dashboard">
        <div>
          <Heading>Your Modules</Heading>
          <ModuleDir/>
          {/* add button to module dir */}
          <button onClick={props.logout}>logout</button>
        </div>
      </Page>
    );
  } else {
    return (
      <Page heading={`${name}'s Dashboard`}>
        <div>
          {/* Contributor application */}
          <Button onClick={() => {props.history.push('contributor-app')}}>Contributor Application</Button>
          <Heading>Your Favorites</Heading> 
          <FavoriteDir />
          <button onClick={props.logout}>logout</button>
        </div>
      </Page>
    );
  }
};

export default withRouter(Dashboard);
