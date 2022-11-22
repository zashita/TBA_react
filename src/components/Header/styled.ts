import React from "react";
import styled from "styled-components"
const Wrapper = styled.div<{height: string}>`
  width: 64%;
  border: 1px solid black;
  margin: 0 auto;
  height: ${props => props.height};
  

`
export default Wrapper;


