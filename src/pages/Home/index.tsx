import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../components/Button';

import { Container, Hero, Header, Main } from './styles';

export function Home() {
    return (
        <Container>
            <Hero>
                <StaticImage
                    src="../../assets/images/home-background.svg"
                    alt="logo"
                    placeholder="blurred"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                    height={860}
                    width={1800}
                />

                <Header>
                    <nav>
                        <StaticImage
                            src="../../assets/images/logo.png"
                            alt="logo"
                            placeholder="blurred"
                            objectFit="fill"
                            width={270}
                        />

                        <Button text="Sobre" size="small" variant="secondary" />
                        <Button
                            text="Cardápio"
                            size="small"
                            variant="secondary"
                        />
                        <Button
                            text="Preços"
                            size="small"
                            variant="secondary"
                        />
                        <Button
                            text="Contato"
                            size="small"
                            variant="secondary"
                        />
                    </nav>

                    <Button text="Peça já a sua" size="small" />
                </Header>

                <Main>
                    <h1>Venha matar a sua fome</h1>
                    <h5>
                        Aproveite nossa comida deliciosa e<br />
                        fortaleça todo o seu organismo
                        <br />
                        sem pagar um absurdo.
                    </h5>
                    <span>E de brinde, proteja os animais!</span>

                    <Button text="Estou com fome" size="large" />
                </Main>
            </Hero>
        </Container>
    );
}
