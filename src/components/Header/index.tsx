import React, {useState} from "react";
import {Logo, SideImg} from "../Logo/styled";
import Block from "../Block";
import AtlasLogo from "../img/svg/Logo.svg";
import SideButton from "../img/svg/Side menu icon.svg";
import ContactButton from "../img/svg/Contact button.svg";
import StyledHeader from "./styled";
import Sidebar from "../Sidebar";
import ContactPopUp from "../ContactPopUp";


const Header = () => {
    const [displaySide, setDisplaySide] = useState("none");
    const [displayContact, setDisplayContact] = useState("none");

    return (
        <StyledHeader>
            <Block height={"7rem"} width={"64.6vw"} display={"flex"} flex={"wrap"} justify={"space-between"}>
                <Block height={"3rem"}
                       display={"flex"} flex={"wrap"} margin={"0"}
                       width={"17rem"}
                       top={"2rem"} justify={"space-between"}>
                    <SideImg width={"20rem"} height={""}>
                        <img src={SideButton} alt="ГЕРОЯМ СЛАВА" onClick={() => setDisplaySide("flex")}/>
                    </SideImg>
                    <Logo>
                        <img src={AtlasLogo} alt="СЛАВА УКРАИНЕ"/>
                    </Logo>


                </Block>
                <Block height={"4.4rem"}
                       display={"flex"} flex={"wrap"} margin={"0"}
                       width={"16rem"}
                       top={"1.3rem"}>
                    <img src={ContactButton} alt="" onClick={() => setDisplayContact("grid")}/>
                </Block>
            </Block>
            <Sidebar display={displaySide} setDisplay={setDisplaySide}/>
            <ContactPopUp display={displayContact} setDisplay={setDisplayContact}/>


        </StyledHeader>
    )
}
export default Header;