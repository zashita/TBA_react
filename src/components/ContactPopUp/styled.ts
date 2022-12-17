import styled from "styled-components";
import React from "react";
export const StyledContact = styled.div<{display:string}>`
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(128, 128, 128, 0.6);
  /* basic bg blur */
  backdrop-filter: blur(25px);
  display: ${props => props.display};
`
export const StyledInput = styled.input`
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #9EA3AA;
  width: 21.875vw;
  height: 2.592592592592593vh;
  margin-left: 19.84375vw;
  margin-bottom: 3.703703703703704vh;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.574074074074074vh;
  line-height: 130%;
  color: #9EA3AA;
`
export const StyledButton = styled.button`
  width: 21.875vw;
  height: 5.555555555555556vh;
  margin: 0 19.84375vw;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.574074074074074vh;
  line-height: 130%;
  color: white;
  background-color: black;
  border:0;




  :hover {
    background-color: rgba(53,37,37,0.84);
    transition: 0.3s;
  }
  
  :active {
    border: 1px solid black;
    transition: 0.5s;
  }
 

`
