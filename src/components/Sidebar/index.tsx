import React, {useState} from 'react';
import Block from "../Block";
import {StyledImg, StyledItem, StyledLink, StyledSidebar} from "./styled";
import CloseButton from "../img/svg/Close icon.svg";

const Sidebar:React.FC<{display:string; setDisplay: any }> = (prop) => {


    return (
        <StyledSidebar display={prop.display}>
            <Block width={"64.6vw"} margin={"20px auto 0"}>
                <StyledImg src={CloseButton} onClick={() => prop.setDisplay("none")}/>
                <ul style={{listStyleType : "none"}}>
                    <StyledItem>
                        <StyledLink href="!#">Home</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink href="!#">Apartments</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink href="!#">About us</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink href="!#">Contact us</StyledLink>
                    </StyledItem>


                </ul>
            </Block>
        </StyledSidebar>


    );
};

export default Sidebar;