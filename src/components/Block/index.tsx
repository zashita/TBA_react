import React from "react";
import StyledBlock from "./styled";
export interface IBlockProps
{
    width?: string
    height?: string
    justify?:string
    display?:string
    flex?: string
    children:any;
    margin?: string;
    position?: string;
    top?: string;
}

export const MainHeaderBlock:React.FC<IBlockProps> = ({children}) =>{
    return(
        <StyledBlock height = {"7rem"} width={"64%"} display={"flex"} flex={"wrap"}>
            {children}
        </StyledBlock>
    )
}
export const LogoBlock:React.FC<IBlockProps> = ({children}) =>{
    return(
        <StyledBlock height={"3rem"}
                     display={"flex"} flex={"wrap"} margin={"0"}
                     width={"17rem"}
                     top = {"2rem"}>
            {children}
        </StyledBlock>
    )
}

