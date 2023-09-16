import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: rgba(85, 49, 255, 0.25);
    --purple-900: #633bbc; //light-purple
    --font-dark: #1C1C1C;
    --white: #fff;
    --bg-black-color: #202024;
}

//color: #996dff;

* {
    margin: 0;
    padding: 0;
    background-color: var(--bg-black-color);
    box-sizing: border-box;
       
}

html {
    //1rem = 16px
   @media(max-width: 1080px) {
    font-size: 93.75%; //1rem = 15 pixels
   }
   @media(max-width: 720px) {
    font-size: 87.5%; //1rem = 14 pixels
}
}
`;
