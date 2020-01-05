import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import axios from "axios";

import {useForm} from "../../../services/forms/hooks";

import {Subhead, Text, Poplink} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import Button from "../../../components/Button/PrimaryButton";
import {SignModal} from "../style";

function Signup(props) {
  const submitEmail = () => {
    // /user/signup
    // check if email valid
    // redirect
    axios
      .post("https://localhost", {email: inputs.email})
      .then(res => {
        // props.history.push('/dash');
      })
      .catch(error => {
        //
      });
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitEmail);

  return (
    <SignModal>
      <Subhead>Sign Up Today</Subhead>
      <form onSubmit={handleSubmit}>
        <Text>Email</Text>
        <FreeInput
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />{" "}
        <br />
        <Button>SIGN UP</Button>
        <Text>Already have an account?</Text>
        <Poplink to="/login">login here.</Poplink>
      </form>
    </SignModal>
  );
}

export default withRouter(Signup);
