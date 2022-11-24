import React from "react";
import Logo from "../Logo/styled";
import Block from "../Block";
import AtlasLogo from "../img/svg/Logo.svg";
import SideButton from "../img/svg/Side menu icon.svg"



const Header = () =>{
    return(
    <Block height = {"70px"} display={"flex"}>
        <Logo>
            <img src={SideButton}/>
            <img src={AtlasLogo}/>
        </Logo>
    </Block>
    )
}
export default Header;