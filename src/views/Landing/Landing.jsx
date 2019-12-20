import React from "react";
import {Link} from "react-router-dom";

import Page from "../../components/Page/Page";

import {LearnSVG, ResearchSVG, ContributeSVG} from "./components/Icons";
import {Info, Links} from "./style.js";
import {Heading, Text, Poptext, Styledlink} from "../../components/Text/text";
import Button from "../../components/Button/SecondaryButton";
import Signup from "./components/Signup";

function Landing() {
  return (
    <div>
      <Page>
        <Info>
          <Poptext>Want to Do Research?</Poptext>
          <Heading>Learn with us</Heading>
          <Text width={"500px"}>
            With tutorials given by UCLA's talented grad students and postdocs, you or
            those you mentor can quickly learn the basics.
          </Text>
          <Links>
            <Styledlink to="/basics-of-genomics">
              <LearnSVG />
              learn
            </Styledlink>{" "}
            <br />
            <Styledlink to="/resources">
              <ResearchSVG />
              research
            </Styledlink>{" "}
            <br />
            <Styledlink to="/module-instructions">
              {" "}
              <ContributeSVG />
              contribute
            </Styledlink>{" "}
            <br />
          </Links>
          <Link to="/basics-of-genomics">
            <Button>see our work</Button>
          </Link>
        </Info>
        <Signup />
      </Page>
    </div>
  );
}

export default Landing;
