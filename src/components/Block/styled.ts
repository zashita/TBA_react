import React from "react";
import styled from "styled-components"
import {IBlockProps} from "./index";
const StyledBlock = styled.div<IBlockProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: ${props => props.justify? props.justify: "center"};
  display: ${props => props.display};
  flex-wrap: ${props => props.flex? props.flex:"nowrap"};
  position: ${props => props.position? props.position:"relative"};
  margin: ${props => props.margin? props.margin: "0 auto"};
  top: ${props => props.top};
  margin-bottom: ${props => props.bottom? props.bottom:"0"};
  background-color: ${props => props.background_color};
  border: ${props => props.border? props.border : 0};
  align-items: ${props => props.align_items};
  
  
  
  
  

`
export default StyledBlock;