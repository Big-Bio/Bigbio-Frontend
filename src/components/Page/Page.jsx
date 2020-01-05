import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import StyledPage, {Content} from "./style.js";

const Page = props => (
  <StyledPage>
    <NavBar />
    {props.heading && <Header>{props.heading}</Header>}
    <Content>{props.children}</Content>
    <Footer />
  </StyledPage>
);

export default Page;
