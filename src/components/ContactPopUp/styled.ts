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