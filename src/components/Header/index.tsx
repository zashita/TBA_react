import React from "react";
import Wrapper from "./styled";
import Logo from "../Logo/styled";
import AtlasLogo from "/img/svg/Logo.svg";

export interface IProps
{
    width?: string
    height?: string
    justify?:string
    display?:string
    flex?: string
}

const Header:React.FC<IProps> = () =>{
    return(
    <Wrapper height = {"70px"} display={"flex"}>
        <Logo>
            <img src = {AtlasLogo} alt=""/>
        </Logo>
    </Wrapper>
    )
}
export default Header;