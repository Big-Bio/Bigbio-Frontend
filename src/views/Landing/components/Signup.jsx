import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import axios from "axios";

import {useForm} from "../../../services/forms/Hooks";

import Popup from "../../../components/Popup/Popup";
import Success from "./Success";

import {Subhead, Text, Poplink, Errortext} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import Button from "../../../components/Button/PrimaryButton";
import {SignModal} from "../style";

function Signup(props) {
  const [popup, togglePopup] = useState(false);

  const submitEmail = () => {
    // /user/signup
    // check if email valid
    // redirect
    axios
      .post("http://localhost:2000/user/signup", {email: inputs.email})
      .then(res => {
        console.log(res);
        if (res.data.msg) {
          // display message
          setErrorMessage(res.data.msg);
        } else {
          setErrorMessage(null);
          // render component
          togglePopup(true);
        }
      })
      .catch(error => {
        setErrorMessage("Error signing up. Please try again later.");
      });
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitEmail);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(popup);
  });

  return (
    <SignModal>
      {popup && <Success togglePopup={togglePopup} email={inputs.email} />}
      <Subhead>Sign Up Today</Subhead>
      <Errortext visible={errorMessage}>{errorMessage}</Errortext>
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
