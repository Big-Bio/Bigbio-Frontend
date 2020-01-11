// styled text components
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Heading = styled.h1`
  color: #08447b;
  margin: 15px 0px 10px 0px;
  font-size: 48px;
  font-weight: 400;
`;

export const Subhead = styled.h2`
  color: #08447b;
`;

export const Styledlink = styled(Link)`
  line-height: 50px;
  color: #aaaaaa;
  font-size: 24px;
  :visited {
    color: #aaaaaa;
  }
  :hover {
    color: #aaaaaa;
  }
`;

export const Poptext = styled.h4`
  font-size: 16px;
  color: #e527a1;
  margin: 0;
`;

export const Errortext = styled.li`
  color: #e527a1;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  font-size: 14px;
`;

export const Poplink = styled(Link)`
  font-size: 16px;
  color: #e527a1;
`;

export const Text = styled.p`
  margin: 10px 0px;
  color: #aaa;
  font-size: 16px;
  width: ${props => (props.width ? props.width : "auto")};
`;
