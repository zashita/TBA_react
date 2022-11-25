import React from "react";
import styled from "styled-components"
import {IBlockProps} from "./index";
const StyledBlock = styled.div<IBlockProps>`
  width: ${props => props.width};
  border: 1px solid black;
  height: ${props => props.height};
  justify-content: ${props => props.justify};
  display: ${props => props.display};
  flex-wrap: ${props => props.flex? props.flex:"nowrap"};
  position: ${props => props.position? props.position:"relative"};
  margin: ${props => props.margin? props.margin: "0 auto"};
  top: ${props => props.top};
  
  
  
  

`
export default StyledBlock;