import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Button } from '../../Button';

import { Container, MenuImageContainer, MenuCard } from './styles';

/*
    Aqui é a section do cardápio do restaurante.
    O cardápio é representado por um carrossel (slider),
    que vai alternando o cardápio de cada dia da semana.

    Ao clicar no cardápio, é redirecionado
    para escolha de tamanho de marmitex.
*/

export function Menu() {
    const date = new Date();

    return (
        <Container id="menu">
            <MenuImageContainer>
                <StaticImage
                    src="../../../assets/images/menu-background.svg"
                    alt="Fruits"
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
            </MenuImageContainer>

            <h3>Cardápio</h3>

            <Carousel
                centerMode
                centerSlidePercentage={20}
                infiniteLoop
                autoPlay
                selectedItem={date.getDay()}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Domingo</h4>
                    <MenuCard>
                        <ul>
                            <li>Arroz com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Segunda-Feira</h4>
                    <MenuCard>
                        <ul>
                            <li>Feijão com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Terça-Feira</h4>
                    <MenuCard>
                        <ul>
                            <li>Granola com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Quarta-Feira</h4>
                    <MenuCard>
                        <ul>
                            <li>Granola com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h5>Quinta-Feira</h5>
                    <MenuCard>
                        <ul>
                            <li>Granola com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Sexta-Feira</h4>
                    <MenuCard>
                        <ul>
                            <li>Granola com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h4>Sábado</h4>
                    <MenuCard>
                        <ul>
                            <li>Granola com Brocólis e Amêndoas</li>
                            <li>Guacamole</li>
                            <li>Salada de lentilha</li>
                            <li>Quibe de abóbora</li>
                            <li>Patê de castanhas</li>
                        </ul>

                        <a href="/#prices">
                            <Button text="Escolher marmitex" size="medium" />
                        </a>
                    </MenuCard>
                </div>
            </Carousel>
        </Container>
    );
}
