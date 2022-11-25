import React from "react";
import {Logo} from "../Logo/styled";
import {LogoBlock, MainHeaderBlock} from "../Block";




const Header = () =>{
    return(
    <MainHeaderBlock>
            <LogoBlock>
                <Logo/>
            </LogoBlock>
    </MainHeaderBlock>
    )
}
export default Header;