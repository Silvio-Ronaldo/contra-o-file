import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Poppins';
        font-size: 16px;

        @media (max-width: 1460px) {
            font-size: 14px;
        }

        @media (max-width: 1300px) {
            font-size: 12px;
        }
    }

    button, input, textarea {
        font-family: 'Poppins';
        font-size: 16px;

        @media (max-width: 1460px) {
            font-size: 14px;
        }

        @media (max-width: 1300px) {
            font-size: 12px;
        }
    }

    h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Poppins';
        font-size: 16px;

        @media (max-width: 1460px) {
            font-size: 14px;
        }

        @media (max-width: 1300px) {
            font-size: 12px;
        }
    }
`;
