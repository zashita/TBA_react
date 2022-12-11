import React, {useState, useEffect} from 'react';
import {Container, ProductInfo, ProductImage1, ProductImage2, ProductSize, ProductPhoto3} from "./styled";

const ApartmensBlock = () => {
    /*const [height, setHeight] = useState((500/1920) * (document.documentElement.clientWidth));
    useEffect(() =>setHeight(height + ((500/1920) * (document.documentElement.clientWidth) - height)) , [height]);*/
    return (
        <Container height = {"26vw"}>
            <ProductInfo/>
            <ProductImage1/>
            <ProductImage2/>
            <ProductSize/>
            <ProductPhoto3/>
        </Container>
    );
};

export default ApartmensBlock;