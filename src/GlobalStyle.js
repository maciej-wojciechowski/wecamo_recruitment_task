import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family: "Montserrat", sans-serif;
        background: #e9e9e9;
    }
    button {
    margin: 1rem;
    background: #a0a7ff;
    padding:1rem;
    box-shadow: 4px -2px 10px -2px rgba(0,0,0,0.6);
    }
    button,input, select {
        cursor:pointer;
        font-weight:bolder;
        font-family: "Montserrat", sans-serif;
        padding:0.5rem;
        border:none;
        border-radius: 5px;
        background: #a0a7ff;
        transition: 0.5s ease;
    &:hover {
      background: #8cdaf1;
    }
    @media(max-width: 800px){
        padding:0.2rem;
    }
    }
    a{
        text-decoration:none;
        color:black;}
        @media(max-width: 800px){
            html{
                font-size:75%;
            }
        }
`;

export default GlobalStyle;
