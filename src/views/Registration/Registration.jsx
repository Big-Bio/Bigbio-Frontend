import React, {useState, useEffect} from "react";
import {Route, withRouter} from "react-router-dom";

import Page from "../../components/Page/Page";

import {Subhead, Text, Errortext} from "../../components/Text/text";
import Button from "../../components/Button/PrimaryButton";
import FreeInput from "../../components/Input/FreeInput";
import Modal from "./style.js";

import {useForm} from "../../services/forms/Hooks";
import axios from "axios";

const scrollToTop = () => window.scrollTo({top: 0, behavior:'smooth'}) 

const Registration = props => {
  const myRef = React.useRef();
  const executeScroll = () => scrollToTop()

  const submitUser = (inputs) => {
    axios
      .post("http://localhost:2000/user/register", {
        vkey: props.match.params.key,
        ...inputs
      })
      .then(res => {
        console.log(res);
        if (res.data.msg) {
          setErrorMessage(res.data.msg);
          executeScroll();
          console.log(res.data.msg);
        } else {
          // TODO: take them to welcome page with login link
          props.history.push("/login");
        }
      })
      .catch(error => {
        executeScroll();
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
          props.history.push("/");
        }
      })
      .catch(res => {
        console.log(res);
        //error handling
      });
  });

  return (
    <Page heading="Registration">  
    <Modal>
    <form onSubmit={handleSubmit}>
    <Errortext visible={errorMessage}>{errorMessage}</Errortext>
    <Subhead>Register Here</Subhead>
      <Text>Username</Text>
      <FreeInput
        type="username"
        name="username"
        onChange={handleInputChange}
        value={inputs.username}
        required
      />
      <Text>Password</Text>
      <FreeInput
        type="password"
        name="password"
        onChange={handleInputChange}
        value={inputs.password}
        required
      />
      <Text>Confirm Password</Text>
      <FreeInput
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
        value={inputs.confirmPassword}
        required
      />
      <br />
      <Subhead>Personal Info</Subhead>
        <Text>First Name</Text>
        <FreeInput
          name="firstname"
          onChange={handleInputChange}
          value={inputs.firstname}
          required
        />
        <Text>Last Name</Text>
        <FreeInput
          name="lastname"
          onChange={handleInputChange}
          value={inputs.lastname}
          required
        />
        <Text>Age</Text>
        <FreeInput name="age" onChange={handleInputChange} value={inputs.age} required />
        <Text>Gender</Text>
        <FreeInput
          name="gender"
          onChange={handleInputChange}
          value={inputs.gender}
          required
        />
        <Text>Country</Text>
        <FreeInput
          type="country"
          name="country"
          onChange={handleInputChange}
          value={inputs.country}
          required
        />
        <Text>State/Province</Text>
        <FreeInput
          type="state"
          name="state"
          onChange={handleInputChange}
          value={inputs.state}
          required
        />
        <Text>Ethnicity</Text>
        <FreeInput
          type="ethnicity"
          name="ethnicity"
          onChange={handleInputChange}
          value={inputs.ethnicity}
          required
        />
        <br />
        <Subhead>Credentials</Subhead>
        <Text>Highest Degree Earned</Text>
          <FreeInput
            type="degree"
            name="degree"
            onChange={handleInputChange}
            value={inputs.highest_degree_earned}
            required
          />
          <Text>Years of Schooling</Text>
          <FreeInput
            type="years"
            name="years"
            onChange={handleInputChange}
            value={inputs.years_schooling}
            required
          />
          <Text>Rank of Knowledge</Text>
          <Text>Biology</Text>
          <FreeInput
            type="rankbio"
            name="rankbio"
            onChange={handleInputChange}
            value={inputs.rank_bio}
            required
          />
          <Text>Stats</Text>
          <FreeInput
            type="rankstats"
            name="rankstats"
            onChange={handleInputChange}
            value={inputs.rank_stats}
            required
          />
          <Text>Computer Science</Text>
          <FreeInput
            type="rankcs"
            name="rankcs"
            onChange={handleInputChange}
            value={inputs.rank_cs}
            required
          />
          <Text>Occupation</Text>
          <FreeInput
            type="occupation"
            name="occupation"
            onChange={handleInputChange}
            value={inputs.occupation}
            required
          />
          <Text>Employer</Text>
          <FreeInput
            type="employer"
            name="employer"
            onChange={handleInputChange}
            value={inputs.employer}
            required
          />
          <br />
          <Button type="submit">REGISTER</Button>
        </form>
        </Modal>
    </Page>
  );
};

export default withRouter(Registration);
