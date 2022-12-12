import React, {useState, useEffect} from 'react';
import {Container, ProductInfo, ProductImage1, ProductImage2, ProductSize, ProductPhoto3, StyledImg, StyledText} from "./styled";
import Apartment_img1 from "../img/apartment3r_photo1.png";
import Apartment_img2 from "../img/apartment3r_photo2.png";
import Apartment_img3 from "../img/apartment3r_photo3.jpg"

const ApartmensBlock = () => {
    /*const [height, setHeight] = useState((500/1920) * (document.documentElement.clientWidth));
    useEffect(() =>setHeight(height + ((500/1920) * (document.documentElement.clientWidth) - height)) , [height]);*/
    return (
        <Container height = {"46.3vh"}>
            <ProductInfo/>
            <ProductImage1>
                <StyledImg src={Apartment_img1}/>
            </ProductImage1>
            <ProductImage2>
                <StyledImg src = {Apartment_img2}/>
            </ProductImage2>
            <ProductSize>
                <StyledText>3 Bedroom apartment</StyledText>
            </ProductSize>
            <ProductPhoto3>
                <StyledImg src={Apartment_img3}/>
            </ProductPhoto3>
        </Container>
    );
};

export default ApartmensBlock;