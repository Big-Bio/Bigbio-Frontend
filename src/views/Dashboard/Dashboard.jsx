import React from "react";
import Page from "../../components/Page/Page";
import {Heading} from "../../components/Text/text";
import Auth from "../../services/auth/auth";
import ModuleDir from "./components/ModuleDir/ModuleDir";
import FavoriteDir from "./components/FavoriteDir/FavoriteDir";
import MiniModuleDir from "./components/AdminDir/ModuleDir";
import PendingDir from "./components/AdminDir/PendingDir";

// https://css-tricks.com/fetching-data-in-react-using-react-async/
// render dashboard asynchronously

// check if user is an admin
function getRole() {
  return "admin";
}

const Dashboard = () => {
  // get modules
  const userRole = getRole();

  if (userRole == "admin") {
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
      </Page>
    );
  } else if (userRole == "contributor") {
    return (
      <Page heading="Dashboard">
        <div>
          <Heading>Your Modules</Heading>
          <ModuleDir />
        </div>
      </Page>
    );
  } else {
    return (
      <Page heading="Dashboard">
        <div>
          <Heading>Your Favorites</Heading>
          <FavoriteDir />
        </div>
      </Page>
    );
  }
};

export default Dashboard;
