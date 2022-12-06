import styled, {StyledComponent} from "styled-components";
import React from "react";
import Block from "../Block";
export const StyledImg = styled.img`
    margin-bottom: 12rem;
    
    
    `
export const StyledItem = styled.li`
  margin-bottom: 40px;  
  
    `
export const StyledLink = styled.a `
  text-decoration: none;
  color: #1F1F1F;
  font-style: normal;
  font-family: Inter;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  :hover{
    color: #9EA3AA;
    transition: 0.3s;
  }


`
export const StyledSidebar = styled.div<{display:string}>`
    top:0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(245, 245, 245, 0.9);
  /* basic bg blur */
  backdrop-filter: blur(25px);
  display: ${props => props.display};
    
    
    `