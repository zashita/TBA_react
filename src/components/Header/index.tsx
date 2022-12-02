import React from "react";
import {Logo, SideImg} from "../Logo/styled";
import Block from "../Block";
import AtlasLogo from "../img/svg/Logo.svg";
import SideButton from "../img/svg/Side menu icon.svg";
import ContactButton from "../img/svg/Contact button.svg";
import StyledHeader from "./styled";


const Header = () => {
    return (
        <StyledHeader>
            <Block height={"7rem"} width={"64%"} display={"flex"} flex={"wrap"} justify={"space-between"}>
                <Block height={"3rem"}
                       display={"flex"} flex={"wrap"} margin={"0"}
                       width={"17rem"}
                       top={"2rem"} justify={"space-between"}>
                    <SideImg width={"20rem"} height={""}>
                        <img src={SideButton} alt="ГЕРОЯМ СЛАВА"/>
                    </SideImg>
                    <Logo>
                        <img src={AtlasLogo} alt="СЛАВА УКРАИНЕ"/>
                    </Logo>


                </Block>
                <Block height={"4.4rem"}
                       display={"flex"} flex={"wrap"} margin={"0"}
                       width={"16rem"}
                       top={"1.3rem"}>
                    <img src={ContactButton} alt=""/>
                </Block>
            </Block>
        </StyledHeader>
    )
}
export default Header;