import React from "react";
import {Link} from "react-router-dom";
import {Topbar} from "./style.js";
import {Navlink} from "./style.js";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;

function NavBar() {
  return (
    <Topbar>
      <Link>Big Bio</Link>
      <Nav>
        <Navlink to="/basics-of-genomics">Basics of Genomics</Navlink>
        <Navlink to="/resources">Resources</Navlink>
        <Navlink>Search</Navlink>
      </Nav>
    </Topbar>
  );
}

export default NavBar;
