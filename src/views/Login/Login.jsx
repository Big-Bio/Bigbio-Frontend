import React, {useState} from "react";
import {withRouter} from "react-router-dom";

import {useForm} from "../../services/forms/Hooks";
import Auth from "../../services/auth/auth";

import Page from "../../components/Page/Page";
import {Subhead, Text, Poplink, Errortext} from "../../components/Text/text";
import FreeInput from "../../components/Input/FreeInput";
import Button from "../../components/Button/PrimaryButton";

import axios from "axios";

import {LoginModal} from "./style";

const Login = props => {
  const history = props.history;

  const submitLogin = inputs => {
    // check correct fields
    var username = inputs.username;
    var password = inputs.password;

    // TODO: move requests to auth
    axios
      .post("http://localhost:2000/user/login", {
        username: inputs.username,
        password: inputs.password,
      })
      .then(res => {
        console.log(res);
        if (res.data.token) {
          setErrorMessage(null);
          Auth.login(res.data.token, username);
          history.replace("/");
        } else {
          // print error on screen
          setErrorMessage("Email/Password incorrect");
        }
      })
      .catch(error => {
        setErrorMessage("Error logging in, please try again later");
        console.log(error);
      });
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitLogin);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Page heading="Login">
      <LoginModal>
        <Subhead>Login Here</Subhead>
        <Errortext visible={errorMessage}>{errorMessage}</Errortext>
        <form onSubmit={handleSubmit}>
          <Text>Username</Text>
          <FreeInput
            type="text"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
            required
          />
          <br />
          <Text>Password</Text>
          <FreeInput
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
            required
          />
          <br />
          <Button type="submit">LOGIN</Button>
          <Text>Forgot username/password?</Text>
          <Poplink to="/">click here.</Poplink>
        </form>
      </LoginModal>
    </Page>
  );
};

export default withRouter(Login);
