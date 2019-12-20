import styled from "styled-components";
import {Modal} from "../../components/container";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Links = styled.div`
  display: block;
  margin: 10px 50px 40px;
`;

export const AuthModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 350px;
  height: 400px;
`;
