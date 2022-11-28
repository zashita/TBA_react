import React from "react";
import styled from "./styled";
import BodyBlock from "./styled";
import {IBlockProps} from "../Block";
import MainImage from "../img/Main Banner.jpg"
import {BodyWrapper} from "../Block";
import Block from "../Block"
const Body = () => {
  return (
      <BodyWrapper>
            <Block>
                <img src={MainImage} width={"100%"} height={"auto"}/>
            </Block>
      </BodyWrapper>

  )
}
export default Body;

