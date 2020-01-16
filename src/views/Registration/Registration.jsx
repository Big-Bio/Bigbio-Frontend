import React, {useState, useEffect} from "react";
import {Route, withRouter} from "react-router-dom";

import Page from "../../components/Page/Page";
import Register from "./components/Register/Register";
import Credentials from "./components/Credentials/Credentials";
import UserInfo from "./components/Info/UserInfo";
import Auth from "../../services/auth/auth";

import {useForm} from "../../services/forms/Hooks";
import axios from "axios";

const Registration = props => {
  // verify vkey

  const submitUser = () => {
    axios
      .post("http://localhost:2000/user/register", {
        vkey: props.match.params.key,
        username: inputs.username,
        password: inputs.password,
      })
      .then(res => {
        console.log(res);
        if (res.data.msg) {
          setErrorMessage(res.data.msg);
          console.log(res.data.msg);
        } else {
          // TODO: take them to welcome page with login link
          props.history.push("/login");
        }
      })
      .catch(error => {
        setErrorMessage("Error logging in, please try again later");
        console.log(error);
      });
    // callback, make request
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitUser);
  const [errorMessage, setErrorMessage] = useState("");
  // match subroutes
  // handle forms (pass into components)
  // handleinput (called on each input item)
  // handle submit (called on register)
  const match = props.match;

  useEffect(() => {
    axios
      .get("http://localhost:2000/user/key", {
        params: {
          vkey: match.params.key,
        },
      })
      .then(res => {
        if (res.data.msg) {
          console.log(res.data.msg);
          props.history.push("/");
        } else {
          console.log("passed!");
        }
      })
      .catch(res => {
        console.log(res);
        //error handling
      });
  });

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
            error={errorMessage}
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
