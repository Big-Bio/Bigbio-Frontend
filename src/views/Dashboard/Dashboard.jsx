import React from "react";
import Page from "../../components/Page/Page";
import {Heading} from "../../components/Text/text";
import Auth from "../../services/auth/auth";
import ModuleDir from "./components/Contributor/ModuleDir/ModuleDir";

// https://css-tricks.com/fetching-data-in-react-using-react-async/
// render dashboard asynchronously

// check if user is an admin
function getRole() {
  return "contributor";
}

const Dashboard = () => {
  // get modules
  const userRole = getRole();

  if (userRole == "admin") {
    return (
      <Page heading="Admin Dashboard">
        <div>
          <Heading>Your Modules</Heading>
        </div>
        <div>
          <Heading>Pending Modules</Heading>
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
          <ModuleDir />
        </div>
      </Page>
    );
  }
};

export default Dashboard;
