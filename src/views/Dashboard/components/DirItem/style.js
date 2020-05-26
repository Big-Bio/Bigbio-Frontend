import styled from "styled-components";
import { Text, StyledTagText } from "../../../../components/Text/text";

export const Name = styled(Text)`
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const Date = styled(Text)`
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const Edit = styled(Text)`
  grid-column-start: 3;
  grid-column-end: 4;
`;

export const Status = styled(StyledTagText)`
  margin: 12px;
  grid-column-start: 4;
  grid-column-end: 5;
`;

export const Remove = styled(Text)`
  grid-column-start: 5;
  grid-column-end: 6;
`;

export const Item = styled.div`
  height: 50px;
  width: 85vw;
  padding: 0px 0px 0px 30px;
  display: grid;
  grid-template-columns: auto 320px 180px 180px 180px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

// css grid
export const StyledItem = styled(Item)`
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.2);
`;