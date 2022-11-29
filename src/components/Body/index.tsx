import React from "react";
import styled from "./styled";
import BodyBlock from "./styled";
import {IBlockProps} from "../Block";
import MainImage from "../img/Main Banner.jpg"
import {BodyWrapper} from "../Block";
import Block from "../Block";
import {TitleText} from "./styled";
import {BodyElement} from "../InfoBlock";

const Body = () => {
  return (
      <BodyWrapper>
            <Block bottom={"12rem"}>
                <TitleText>THE ATLAS BUILDING</TitleText>
                <img src={MainImage} width={"100%"} height={"auto"}/>
            </Block>
            <BodyElement title={"Amenities"}/>
      </BodyWrapper>

  )
}
export default Body;

