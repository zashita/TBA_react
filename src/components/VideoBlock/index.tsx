import React from "react";
import StyledVideo from "./styled";
import Block from "../Block";

const VideoBlock:React.FunctionComponent<{ children? :any}> = (props) =>{
    return(
        <Block width={"100%"} {...props}>
            <StyledVideo src="https://player.vimeo.com/video/645692873?h=4dc6feb9eb&amp;autoplay=1&amp;muted=1&amp;autopause=0&amp;loop=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                         frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen/>

        </Block>
    )
}
export default VideoBlock;