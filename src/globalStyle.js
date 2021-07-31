import { createGlobalStyle } from "styled-components";
import Oswald from "./assets/fonts/oswald.woff";
import Abel from "./assets/fonts/abel.woff";


const GlobalStyle = createGlobalStyle`

    html{
        --orange: #C4762A;
        --cream: #FEEECD;
        --grey: #333333;
        --white: #FFFAF0;
        --red: #A81A1A;
        --black: #101010;


        --spacer: 1rem;

        --bp-xs: 0;
        --bp-sm: 576px;
        --bp-md: 768px;
        --bp-lg: 992px;
        --bp-xl: 1200px;
        --bp-xxl: 1400px; 
    }

    *{
        box-sizing: border-box;
    }

    
    html{
        scroll-behavior: smooth;
    }

    @font-face {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: normal;
        src: url(${Oswald}) format('woff');
        font-display: swap;
    }

    @font-face {
        font-family: 'Abel';
        font-style: normal;
        font-weight: normal;
        src: url(${Abel}) format('woff');
        font-display: swap;
    }

    body {
        width:100%;
        margin: 0;
        font-family: "Abel";
        color: var(---black);

        h1,h2 {
            font-family: "Oswald";
            margin: 0.2rem;
        }

        h1{
            font-size: calc(0.5rem + 7vmin);
        }
        h2{
            font-size: calc(0.5rem + 4vmin);
        }
        h3{
            font-size: calc(0.5rem + 3vmin);
        }
        h4{
            font-size: calc(0.5rem + 2vmin);
        }
        h5{
            font-size: calc(0.5rem + 1.5vmin);
        }
    }

    .orange{
        color: var(--orange);
    }
    .black{
        color: var(--black);
    }
    .red{
        color: var(--red);
    }
    .grey{
        color: var(--grey);
    }
    .white{
        color: var(--white);
    }
    .cream{
        color: var(--cream);
    }

    .oswald{
        font-family: "oswald";
    }
    .abel{
        font-family: "abel";
    }

        /*----------------------*\
              Utility
    \*----------------------*/
    /* Margin */
    .m-0 {
        margin: calc(var(--spacer) * 0);
    }

    .m-1 {
        margin: calc(var(--spacer) * 0.25);
    }

    .m-2 {
        margin: calc(var(--spacer) * 0.5);
    }

    .m-3 {
        margin: calc(var(--spacer) * 1);
    }

    .m-4 {
        margin: calc(var(--spacer) * 1.5);
    }

    .m-5 {
        margin: calc(var(--spacer) * 3);
    }

    /* Padding */
    .p-0 {
        padding: calc(var(--spacer) * 0);
    }

    .p-1 {
        padding: calc(var(--spacer) * 0.25);
    }

    .p-2 {
        padding: calc(var(--spacer) * 0.5);
    }

    .p-3 {
        padding: calc(var(--spacer) * 1);
    }

    .p-4 {
        padding: calc(var(--spacer) * 1.5);
    }

    .p-5 {
        padding: calc(var(--spacer) * 3);
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
    @media (min-width: 1400px) {}

`

export default GlobalStyle;