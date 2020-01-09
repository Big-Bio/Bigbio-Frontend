import React from "react";
import {StyledItem, Name, Date, Edit, Submit, Remove} from "./style";
import Button from "../../../../components/Button/SecondaryButton";

const ModuleDir = () => {
  return (
    <>
      <StyledItem>
        <Name>name</Name>
        <Date>date created</Date>
        <Edit>edit module</Edit>
        <Submit>submit module</Submit>
        <Remove>remove module</Remove>
      </StyledItem>
      <br />
      <Button>LOAD MORE</Button>
    </>
  );
};

export default ModuleDir;
