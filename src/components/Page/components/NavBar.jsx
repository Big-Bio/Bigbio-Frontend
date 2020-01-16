import React from "react";
import {Link, withRouter} from "react-router-dom";
import {Topbar} from "./style.js";
import {Navlink} from "./style.js";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;

function NavBar(props) {
  return (
    <Topbar>
      <Link to="/">Big Bio</Link>
      <Nav>
        <Navlink to="/basics-of-genomics">Basics of Genomics</Navlink>
        <Navlink to="/resources">Resources</Navlink>
        <Navlink>Search</Navlink>
      </Nav>
    </Topbar>
  );
}

export default withRouter(NavBar);
