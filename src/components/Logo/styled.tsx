import React from "react";
import styled from "styled-components";
const StyledLogo = styled.div`
  size: 13rem 3rem;
  top: 50%;
  position: absolute;
  margin: 0; /* 3 */
  transform: translate(0, -50%)
`
const Logo = (props:{children:any}) =>{
    return(
        <StyledLogo>
            {props.children}
        </StyledLogo>
    )
}
export default Logo;

