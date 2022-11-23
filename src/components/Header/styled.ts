import React from "react";
import styled from "styled-components"
import {IProps} from "./index";
const Wrapper = styled.div<IProps>`
  width: 64%;
  border: 1px solid black;
  margin: 0 auto;
  height: ${props => props.height};
  justify-content: ${props => props.justify};
  display: ${props => props.display};
  flex-wrap: ${props => props.flex? props.flex:"nowrap"}
  
  
  

`
export default Wrapper;


