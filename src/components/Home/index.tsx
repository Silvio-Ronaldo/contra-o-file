import React from 'react';

import { Hero } from './Hero';
import { About } from './About';
import { Menu } from './Menu';
import { Prices } from './Prices';
import { Contact } from './Contact';

import { Container } from './styles';

/*
    Home é o componente que representa toda nossa página do site.
    Ele é dividido em várias sections que ocupam a tela a cada vez.
    As sections estão todas listadas abaixo:
*/

export function Home() {
    return (
        <Container>
            <Hero />
            <About />
            <Menu />
            <Prices />
            <Contact />
        </Container>
    );
}
