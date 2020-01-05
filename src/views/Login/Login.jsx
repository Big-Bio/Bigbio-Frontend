import React from "react";
import {withRouter} from "react-router-dom";

import {useForm} from "../../services/forms/hooks";
import Auth from "../../services/auth/auth";

import Page from "../../components/Page/Page";
import {Subhead, Text, Poplink} from "../../components/Text/text";
import FreeInput from "../../components/Input/FreeInput";
import Button from "../../components/Button/PrimaryButton";

import {LoginModal} from "./style";

const Login = props => {
  const history = props.history;

  const submitLogin = inputs => {
    // check correct fields
    var username = inputs.username;
    var password = inputs.password;
    console.log(username, password);
    // submit request, promise
    // Auth.login({username, password});
    // redirect
    // history.push('/');
    history.push("/dash");
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitLogin);

  return (
    <Page heading="Login">
      <LoginModal>
        <Subhead>Login Here</Subhead>
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
          <Button>LOGIN</Button>
          <Text>Forgot username/password?</Text>
          <Poplink to="/">click here.</Poplink>
        </form>
      </LoginModal>
    </Page>
  );
};

export default withRouter(Login);
