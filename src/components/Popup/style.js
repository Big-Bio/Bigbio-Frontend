import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -280px;
  top: 40%;
  margin-top: -127px;
  z-index: 1000;
  width: 560px;
  height: 245px;
  padding: 20px;
  border: 1px solid #dedede;
  box-sizing: border-box;

  background-color: white;
  box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const Close = styled.div`
    position:relative
    display: inline;
    float:right;
    :before, :after { 
        position: absolute;
        top: 4px;
        left: -15px;
        content: "";
        width: 15px;
        height: 2px;
        background-color: #999;
    }

    :before { 
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        }
    
    :after { 
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    cursor: pointer;
`;
