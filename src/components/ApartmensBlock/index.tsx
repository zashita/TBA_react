import React from 'react';
import {Container, ProductInfo, ProductImage1, ProductImage2, ProductSize, ProductPhoto3} from "./styled";

const ApartmensBlock = () => {
    let height: number = (500/1080) * (document.documentElement.clientHeight);
    return (
        <Container height = {height + "px"}>
            <ProductInfo/>
            <ProductImage1/>
            <ProductImage2/>
            <ProductSize/>
            <ProductPhoto3/>
        </Container>
    );
};

export default ApartmensBlock;