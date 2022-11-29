import {createGlobalStyle} from "styled-components";
import InterWoff from './fonts/inter-v12-latin-regular.woff';
import InterWoff2 from './fonts/inter-v12-latin-regular.woff2';
import Inter500Woff from './fonts/inter-v12-latin-500.woff';
import Inter500Woff2 from './fonts/inter-v12-latin-500.woff2';
import Inter600Woff from './fonts/inter-v12-latin-600.woff';
import Inter600Woff2 from './fonts/inter-v12-latin-600.woff2';

export default createGlobalStyle`
 
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
     
    }
    #root{
        margin:0 auto;
     
    }
    html{
     font-size: 10px;
     
    }
    @font-face {
     font-family: 'Inter';
     src: local('Inter'), local('Inter'),
     url(${InterWoff2}) format('woff2'),
     url(${InterWoff}) format('woff');
    url(${Inter500Woff2}) format('woff2'),
    url(${Inter500Woff}) format('woff');
    url(${Inter600Woff2}) format('woff2'),
    url(${Inter600Woff}) format('woff');
     font-weight: 400;
     font-style: normal;
    }
    
 `
