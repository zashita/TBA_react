import React from "react";
import styled from "styled-components";
import Block, {IBlockProps} from "../Block";
import StyledBlock from "../Block/styled";
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";
export const Container = styled.div<{height: string}>`
width: 100%;
  height: ${props => props.height};
  display: grid;
  grid-template-columns: calc(36/124 * 100%) auto auto;
  grid-template-rows: 12% 32% 48%;
  grid-gap: 1.041666666666667vw;
  text-align: center;
`
export const ProductInfo = styled.div`
  grid-column: 1/ span 1;
  grid-row: 1/ span 3;
  border: 1px solid #9EA3AA;
`
export const ProductImage1 = styled.div`
  grid-row: 1/ span 2;
  grid-column: 2/ span 1;

`
export const ProductImage2 = styled.div`
  grid-column: 2/ span 1;
  grid-row: 3/ span 1;
`
export const ProductSize = styled.div`
  grid-column: 3/ span 1;
  grid-row: 1/ span 1;
  border: 1px solid #9EA3AA;  
  display: grid;
  align-items: center;
`
export const ProductPhoto3 = styled.div`
  grid-column: 3/ span 1;
  grid-row: 2/ span 2;
`
export const StyledImg = styled.img`
    width: 100%;
  height: 100%;
  position: relative;
`

export const StyledText = styled.p<{margin_left?:string, color?:string}>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.574074074074074vh;
  line-height: 130%;
  color: ${props => props.color? props.color:"#1F1F1F"};
  margin-left: ${props => props.margin_left? props.margin_left: 0};
`
