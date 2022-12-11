import React from "react";
import styled from "styled-components";
import Block, {IBlockProps} from "../Block";
import StyledBlock from "../Block/styled";
export const Container = styled.div<{height: string}>`
width: 100%;
  height: ${props => props.height};
  display: grid;
  grid-template-columns: calc(36/124 * 100%) auto auto;
  grid-template-rows: 12% 32% 48%;
  grid-gap: 2rem;
`
export const ProductInfo = styled.div`
  grid-column: 1/ span 1;
  grid-row: 1/ span 3;
  border: 1px solid black
`
export const ProductImage1 = styled.div`
  grid-row: 1/ span 2;
  grid-column: 2/ span 1;
  border: 1px solid black

`
export const ProductImage2 = styled.div`
  grid-column: 2/ span 1;
  grid-row: 3/ span 1;
  border: 1px solid black
`
export const ProductSize = styled.div`
  grid-column: 3/ span 1;
  grid-row: 1/ span 1;
  border: 1px solid black
`
export const ProductPhoto3 = styled.div`
  grid-column: 3/ span 1;
  grid-row: 2/ span 2;
  border: 1px solid black
`
