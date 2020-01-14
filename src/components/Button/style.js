import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledInput = styled.input.attrs({type: "submit"})`
  background: #ebebeb;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  padding: 11px 25px;
  margin: 15px 0px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  top: 30px;
  left: 25%;
  background: #ebebeb;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  color: #000;
  padding: 11px 25px;
`;

export const StyledButtonTwo = styled.button`
  align-self: flex-start;
  background: #ffffff;
  border: 1px solid #0047ff;
  border-radius: 24px;
  font-size: 16px;
  padding: 8px 16px 8px 16px;
`;

export const StyledBack = styled.button`
  position: relative;
  top: 160px;
  left: 40px;
  width: 90px;
  height: 45px;
  background-color: #f5f5f5;
  border: none;
`;

export const Chevron = styled.span`
  margin-right: 8px;
  ::before {
    color: #dedede;
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: "";
    display: inline-block;
    height: 1em;
    position: relative;
    vertical-align: top;
    width: 1em;
    left: 0.25em;
    transform: rotate(-135deg);
  }
`;
