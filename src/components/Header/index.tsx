import React from "react";
import {Logo, SideImg} from "../Logo/styled";
import {LogoBlock, MainHeaderBlock, ContactBlock} from "../Block";
import AtlasLogo from "../img/svg/Logo.svg";
import SideButton from "../img/svg/Side menu icon.svg";
import ContactButton from "../img/svg/Contact button.svg";
import StyledHeader from "./styled";





const Header = () =>{
    return(
    <StyledHeader>
    <MainHeaderBlock>
            <LogoBlock>
                <SideImg width={"20rem"} height={""}>
                    <img  src={SideButton} alt="ГЕРОЯМ СЛАВА" />
                </SideImg>
                <Logo>
                    <img src={AtlasLogo} alt="СЛАВА УКРАИНЕ"/>
                </Logo>


            </LogoBlock>
        <ContactBlock>
            <img src={ContactButton} alt=""/>
        </ContactBlock>
    </MainHeaderBlock>
    </StyledHeader>
    )
}
export default Header;