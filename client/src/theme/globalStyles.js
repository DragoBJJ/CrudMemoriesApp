import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
       @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
     -webkit-font-smoothing: antialiased; 
     -moz-osx-font-smoothing: grayscale;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}

body {
    font-size : 1.6rem;
}

`;

export default GlobalStyle;
