import styled, { createGlobalStyle } from "styled-components";
import { light, dark } from './data/GlobalData';

export const GlobalStyle = createGlobalStyle`
:root{
   --background: #eff7f9;
   --black:#0a0b10;
   --purple:#803bec;
   --pink:#e5a1f8;
   --white:#fff;
   --nav:#35353f;
   --nav2:#3f3d56;
}
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  overflow-x: hidden;
  
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: linear-gradient(90deg, rgba(10,10,17,1) 0%, rgba(0,7,61,1) 100%);
  

    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {
        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }
    *:focus {
        outline: none;
    }
   
`;

