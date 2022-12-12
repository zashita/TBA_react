import React, {useState} from 'react';
import Block from "../Block";
import {StyledContact} from "./styled";
import CloseButton from "../img/svg/Close icon.svg";

const ContactPopUp:React.FC<{display:string; setDisplay: any }> = (prop) => {


    return (
        <StyledContact display={prop.display}>
            <Block width={"64.6vw"} margin={"20px auto 0"}>

            </Block>
        </StyledContact>


    );
};

export default ContactPopUp;