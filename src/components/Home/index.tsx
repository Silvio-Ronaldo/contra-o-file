import React from 'react';

import { Hero } from './Hero';
import { About } from './About';
import { Menu } from './Menu';
import { Prices } from './Prices';
import { Contact } from './Contact';

import { Container } from './styles';

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
