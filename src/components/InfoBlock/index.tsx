import React from "react";
import {Headliner, HeadlinerText} from "./styled"
export interface IBodyElementProps
{
    title: string;
    blockname?: React.FC;
}
export const BodyElement:React.FC<IBodyElementProps> = ({title,}) =>{
    return(
        <Headliner>
            <HeadlinerText>{title}</HeadlinerText>
        </Headliner>

    )
}
