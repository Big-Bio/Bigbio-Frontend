import styled from "styled-components";
import {Link} from "react-router-dom";
// header
export const Topbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;

  background-color: white;
  justify-content: space-between;
  padding: 30px 40px 30px 40px;
`;

// footer
export const BottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #08447b;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

// text
export const Navlink = styled(Link)`
  margin-left: 35px;
  color: #aaa;
  font-size: 16px;
`;
