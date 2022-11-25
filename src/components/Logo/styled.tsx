import React from "react";
import styled from "styled-components";
import AtlasLogo from "../img/svg/Logo.svg";
import SideButton from "../img/svg/Side menu icon.svg"
export interface ILogoProps{

    margin_right?:string;
    source?: string;
}
const StyledLogo = styled.image<ILogoProps>`
  top: 50%;
  position: absolute;
  margin: 0; /* 3 */
  transform: translate(0, -50%);
  background-image:url(${props => props.source}) ;
  
`

export const Logo:React.FC<ILogoProps> = () =>{
    return(
        <StyledLogo source={AtlasLogo}/>

    )
}

