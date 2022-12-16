import React from "react";
import StyledBlock from "./styled";
import BodyBlock from "../Body/styled";
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
    bottom?: string;
    background_color?: string;
    onMouseDown?:any;
    border?:string;
    align_items?:string;
}


const Block:React.FC<IBlockProps> = (props) =>{
    return(
        <StyledBlock {...props}>

        </StyledBlock>
    )
}
export default Block;



