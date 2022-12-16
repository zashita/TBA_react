import React, {useState} from 'react';
import Block from "../Block";
import {StyledContact, StyledInput} from "./styled";
import CloseButton from "../img/svg/Close icon.svg";
import {HeadlinerText} from "../InfoBlock/styled";
import Form from "./Form";


const ContactPopUp:React.FC<{display:string; setDisplay: any }> = (prop) => {


    return (
        <StyledContact display={prop.display} onMouseDown={()=> prop.setDisplay("none")}>

            <Block  width={"64.6vw"} onMouseDown={(e:any) => e.stopPropagation()} margin={"14.4444444444444vh auto 0"} height={"29.16666666666667vw"} background_color={"white"}>
                <HeadlinerText style={{margin: "2.604166666666667vw auto", width: "24.94791666666667vw", height:"8.888888888888889vh", marginBottom: "5.555555555555556vh"}}>Apartments aviable now.
                    Enquire today</HeadlinerText>
                <Form/>
            </Block>
        </StyledContact>


    );
};

export default ContactPopUp;