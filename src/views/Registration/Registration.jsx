import React from "react";
import {Route, withRouter} from "react-router-dom";

import Page from "../../components/Page/Page";
import Register from "./components/Register/Register";
import Credentials from "./components/Credentials/Credentials";
import UserInfo from "./components/Info/UserInfo";

import {useForm} from "../../services/forms/hooks";

const Registration = props => {
  const submitUser = () => {
    console.log(inputs);
    props.history.push("/dash");
    // callback, make request
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitUser);
  // match subroutes
  // handle forms (pass into components)
  // handleinput (called on each input item)
  // handle submit (called on register)
  const match = props.match;

  return (
    <Page heading="Registration">
      <Route
        exact
        path={`${match.path}/`}
        render={props => (
          <Register handleInputChange={handleInputChange} inputs={inputs} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/info`}
        render={props => (
          <UserInfo handleInputChange={handleInputChange} inputs={inputs} {...props} />
        )}
      />
      <Route
        path={`${match.path}/info/cred`}
        render={props => (
          <Credentials
            handleInputChange={handleInputChange}
            inputs={inputs}
            handleSubmit={handleSubmit}
            {...props}
          />
        )}
      />
    </Page>
  );
};

export default withRouter(Registration);
