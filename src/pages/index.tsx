import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

import { Home } from '../components/Home';

function Index() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}

export default Index;
