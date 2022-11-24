import React from "react";
import StyledBlock from "./styled";
import Logo from "../Logo/styled";

export interface IProps
{
    width?: string
    height?: string
    justify?:string
    display?:string
    flex?: string
    children:any;
}

const Block:React.FC<IProps> = ({children}) =>{
    return(
        <StyledBlock height = {"70px"} display={"flex"}>
            {children}
        </StyledBlock>
    )
}
export default Block;