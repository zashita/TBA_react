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
        <StyledBlock height = {"7rem"} width={"64%"} display={"flex"} flex={"wrap"} justify={"space-between"}>
            {children}
        </StyledBlock>
    )
}
export const LogoBlock:React.FC<IBlockProps> = ({children}) =>{
    return(
        <StyledBlock height={"3rem"}
                     display={"flex"} flex={"wrap"} margin={"0"}
                     width={"17rem"}
                     top = {"2rem"} justify={"space-between"}>
            {children}
        </StyledBlock>
    )
}
export const ContactBlock:React.FC<IBlockProps> = ({children}) =>{
    return(
        <StyledBlock height={"4.4rem"}
                     display={"flex"} flex={"wrap"} margin={"0"}
                     width={"16rem"}
                     top = {"1.3rem"}>
            {children}
        </StyledBlock>
    )
}
const Block:React.FC<IBlockProps> = ({children}) =>{
    return(
        <StyledBlock>
            {children}
        </StyledBlock>
    )
}
export default Block;

