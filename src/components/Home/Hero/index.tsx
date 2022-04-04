import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FiMenu } from 'react-icons/fi';

import { Button } from '../../Button';
import { BurgerMenuList } from '../../BurgerMenuList';

import {
    Container,
    HeroImageContainer,
    Header,
    HeaderWrapper,
    ButtonHeaderWrapper,
    BurgerMenu,
    Main,
} from './styles';

export function Hero() {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    function handleBurgerMenu() {
        setOpenBurgerMenu(!openBurgerMenu);
    }

    return (
        <Container>
            <HeroImageContainer>
                <StaticImage
                    src="../../../assets/images/home-background.svg"
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
            </HeroImageContainer>

            <Header>
                <HeaderWrapper>
                    <div>
                        <StaticImage
                            src="../../../assets/images/logo.svg"
                            alt="logo"
                            placeholder="blurred"
                            objectFit="fill"
                            aspectRatio={2}
                        />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/#about">Sobre</a>
                            </li>
                            <li>
                                <a href="/#menu">Cardápio</a>
                            </li>
                            <li>
                                <a href="/#prices">Preços</a>
                            </li>
                            <li>
                                <a href="/#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </HeaderWrapper>

                <ButtonHeaderWrapper>
                    <Button text="Peça já a sua" size="small" />
                </ButtonHeaderWrapper>

                <BurgerMenu onClick={handleBurgerMenu}>
                    <FiMenu size={24} color="#5C9600" />
                    <BurgerMenuList visible={openBurgerMenu} />
                </BurgerMenu>
            </Header>

            <Main>
                <h1>Venha matar a sua fome</h1>
                <h2>
                    Aproveite nossa comida deliciosa e<br />
                    fortaleça todo o seu organismo
                    <br />
                    sem pagar um absurdo.
                </h2>
                <span>E de brinde, proteja os animais!</span>

                <Button text="Estou com fome" size="large" />
            </Main>
        </Container>
    );
}
