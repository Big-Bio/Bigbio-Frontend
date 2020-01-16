import React from "react";
import {StyledItem, Name, Date, Edit, Submit, Remove} from "./style";
import Button from "../../../../../components/Button/SecondaryButton";

import ModuleItem from "./ModuleItem/ModuleItem";

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
      {/* map styled items here */}
      <ModuleItem id={124432} name="Module Uno" date="Dec 21st, 2019"></ModuleItem>
      <br />
      <Button>LOAD MORE</Button>
    </>
  );
};

export default ModuleDir;
