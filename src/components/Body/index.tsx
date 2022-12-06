import React from "react";
import MainImage from "../img/Main Banner.jpg"
import Block from "../Block";
import {TitleText} from "./styled";
import {BodyElement} from "../InfoBlock";
import VideoBlock from "../VideoBlock";

const Body = () => {

  return (
      <Block width={"64%"} margin={"12rem auto"} position={"relative"}>
            <Block bottom={"12rem"}>
                <TitleText>THE ATLAS BUILDING</TitleText>
                <img src={MainImage} width={"100%"} height={"auto"}/>
            </Block>
            <BodyElement title={"Test"}>
                <VideoBlock/>
            </BodyElement>
      </Block>

  )
}
export default Body;

