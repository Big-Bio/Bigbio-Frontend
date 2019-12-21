import React from "react";
import Page from "../../components/Page/Page";

// https://css-tricks.com/fetching-data-in-react-using-react-async/
// render dashboard asynchronously

// check if user is an admin
function requireAdmin() {
  return false;
}

const Dashboard = () => {
  const isAdmin = requireAdmin();

  if (isAdmin) {
    return (
      <Page heading="Admin Dashboard">
        <div></div>
      </Page>
    );
  } else {
    return (
      <Page heading="Dashboard">
        <div></div>
      </Page>
    );
  }
};

export default Dashboard;
