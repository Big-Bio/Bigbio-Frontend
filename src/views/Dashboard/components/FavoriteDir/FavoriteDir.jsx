import React from "react";
import {StyledItem, Name, Date, Remove} from "../DirItem/style";
import Button from "../../../../components/Button/SecondaryButton";

import FavoriteItem from "../DirItem/FavoriteItem";

const ModuleDir = () => {
  return (
    <>
      <StyledItem>
        <Name>name</Name>
        <Date>date created</Date>
        <Remove>remove module</Remove>
      </StyledItem>
      {/* map styled items here */}
      <FavoriteItem id={124432} name="Module Uno" date="Dec 21st, 2019"></FavoriteItem>
      <br />
      <Button >LOAD MORE</Button>
    </>
  );
};

export default ModuleDir;
