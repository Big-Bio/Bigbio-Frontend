import React from "react";

import {StyledItem, Name, Date, Remove} from "./style";
import Button from "../../../../components/Button/TextButton";
import {Link} from "react-router-dom";

const FavoriteItem = props => {
  return (
    <StyledItem>
      <Name>
        <Link to={`/module/${props.id}`}>{props.name}</Link>
      </Name>
      <Date>{props.date}</Date>
      {/* remove from user's favorites */}
      <Remove>
        <Button to={`/module/remove/${props.id}`}>REMOVE</Button>
      </Remove>
    </StyledItem>
  );
};

export default FavoriteItem;
