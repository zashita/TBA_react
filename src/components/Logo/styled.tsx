import React from "react";
import styled from "styled-components";
import SideButton from "../img/svg/Side menu icon.svg"
import AtlasLogo from "../img/svg/Logo.svg";
export interface ILogoProps{

    margin_right?:string;
    children: any;
    margin_left?:string;
    width?:string;
    height?:string;
    top?:string;
    position?: string;
}
const StyledLogo = styled.div<ILogoProps>`
  top: ${props => props.top? props.top:"0"};
  position: ${props => props.position?props.position:"relative"};
  margin-left: ${props => props.margin_left? props.margin_left :"0"};
  margin-right: ${props => props.margin_right? props.margin_right : "0"};
  width: ${props => props.width};
  height: ${props => props.height};
`

export const Logo:React.FC<ILogoProps> = ({children}) =>{
    return(
        <StyledLogo  width={"13rem"} height={"3rem"}>
            {children}
        </StyledLogo>

    )
}
export const SideImg:React.FC<ILogoProps> = ({children}) =>{
    return(
        <StyledLogo top={"0.8rem"} height={"0.6rem"}>
            {children}
        </StyledLogo>

    )
}

