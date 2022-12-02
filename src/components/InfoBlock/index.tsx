import React from "react";
import {Headliner, HeadlinerText} from "./styled"
import Block from "../Block";

export interface IBodyElementProps {
    title: string;
    blockname?: any;
    children?: any;
}

export const BodyElement: React.FC<IBodyElementProps> = ({title,children}) => {
    return (
        <Block>
            <Headliner>
                <HeadlinerText>{title}</HeadlinerText>
            </Headliner>
            {children}
        </Block>

    )
}
