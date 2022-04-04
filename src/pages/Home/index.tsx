import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Button } from '../../components/Button';

import {
    Container,
    Hero,
    HeroImageContainer,
    Header,
    HeaderWrapper,
    BurgerMenu,
    Main,
    About,
    AboutCards,
    AboutCard,
    Menu,
    MenuImageContainer,
    MenuCard,
    Prices,
    PackedLunch,
    PriceDetails,
    PriceImageContainer,
    PriceInfo,
    Contact,
    Informations,
    Data,
    Map,
    MapImageContainer,
    Footer,
    FooterImageContainer,
    Copyright,
    ButtonHeaderWrapper,
} from './styles';
import { BurgerMenuList } from '../../components/BurgerMenuList';

export function Home() {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const date = new Date();

    function handleBurgerMenu() {
        setOpenBurgerMenu(!openBurgerMenu);
    }

    return (
        <Container>
            <Hero>
                <HeroImageContainer>
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
                </HeroImageContainer>

                <Header>
                    <HeaderWrapper>
                        <div>
                            <StaticImage
                                src="../../assets/images/logo.svg"
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
            </Hero>

            <About id="about">
                <StaticImage
                    src="../../assets/images/peanuts.svg"
                    alt="Amendoins"
                    placeholder="blurred"
                    height={180}
                    width={180}
                />

                <h3>Nossos valores</h3>
                <h4>Por que escolher o Contra o Filé?</h4>

                <AboutCards>
                    <AboutCard>
                        <StaticImage
                            src="../../assets/images/healthy-food.svg"
                            alt="Comida saudável"
                            placeholder="blurred"
                        />
                        <h5>Comida vegana saudável e fresca</h5>
                        <p>
                            Não importa se você começou ontem no veganismo ou já
                            está no caminho a tempos, temos algo que vai agradar
                            o seu paladar.{' '}
                        </p>
                    </AboutCard>

                    <AboutCard>
                        <StaticImage
                            src="../../assets/images/local-producers.svg"
                            alt="Produtores locais"
                            placeholder="blurred"
                        />
                        <h5>Produtores locais e orgânicos</h5>
                        <p>
                            Trabalhamos com produtos de agricultura familiar e
                            incentivamos a produção de comida local.
                        </p>
                    </AboutCard>

                    <AboutCard>
                        <StaticImage
                            src="../../assets/images/acessible.svg"
                            alt="Acessível a todos"
                            placeholder="blurred"
                        />
                        <h5>
                            Acessível a<br /> todos
                        </h5>
                        <p>
                            Comida vegana não precisa ser cara e inacessível, o
                            Contra o Filé tenta democratizar o acesso a esse
                            tipo de produto.
                        </p>
                    </AboutCard>
                </AboutCards>
            </About>

            <Menu id="menu">
                <MenuImageContainer>
                    <StaticImage
                        src="../../assets/images/menu-background.svg"
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
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
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

                            <Button text="Escolher marmitex" size="medium" />
                        </MenuCard>
                    </div>
                </Carousel>
            </Menu>

            <Prices id="prices">
                <h3>Preços e Tamanhos</h3>

                <PackedLunch>
                    <PriceDetails>
                        <PriceImageContainer>
                            <StaticImage
                                src="../../assets/images/packed-lunch-large.svg"
                                alt="Marmitex grande"
                                placeholder="blurred"
                                height={310}
                                width={320}
                                style={{ borderRadius: 9999 }}
                            />
                        </PriceImageContainer>

                        <PriceInfo>
                            <h4>Grande</h4>
                            <span>R$ 22,90</span>
                            <p>R$ 18,90</p>
                        </PriceInfo>
                    </PriceDetails>
                    <Button text="Quero a grande" size="large" />
                </PackedLunch>

                <PackedLunch size="medium">
                    <PriceDetails>
                        <PriceImageContainer>
                            <StaticImage
                                src="../../assets/images/packed-lunch-medium.svg"
                                alt="Marmitex média"
                                placeholder="blurred"
                                height={250}
                                width={260}
                                style={{ borderRadius: 9999 }}
                            />
                        </PriceImageContainer>
                        <PriceInfo size="medium">
                            <h4>Média</h4>
                            <span>R$ 18,90</span>
                            <p>R$ 17,50</p>
                        </PriceInfo>
                    </PriceDetails>

                    <Button text="Quero a média" size="medium" />
                </PackedLunch>

                <PackedLunch size="small">
                    <PriceDetails>
                        <PriceImageContainer>
                            <StaticImage
                                src="../../assets/images/packed-lunch-small.svg"
                                alt="Marmitex pequena"
                                placeholder="blurred"
                                height={190}
                                width={200}
                                style={{ borderRadius: 9999 }}
                            />
                        </PriceImageContainer>
                        <PriceInfo size="small">
                            <h4>Pequena</h4>
                            <span>R$ 15,90</span>
                            <p>R$ 15,50</p>
                        </PriceInfo>
                    </PriceDetails>

                    <Button text="Quero a pequena" size="small" />
                </PackedLunch>
            </Prices>

            <Contact id="contact">
                <h3>Como nos encontrar?</h3>

                <Informations>
                    <Data>
                        <div>
                            <h4>Atendemos apenas delivery no momento!</h4>
                            <p>
                                Horário de funcionamento: 11:00H - 15:00H
                                <br />
                                Seg a Sáb.
                            </p>
                            <p>
                                Localização: Rua Alfredo Lopes 1717
                                <br /> CEP 13560460
                            </p>
                            <p>Telefone: (16) 98765-1234 - Whatsapp</p>
                        </div>

                        <Button text="Ir para o nosso WhatsApp" size="large" />
                    </Data>

                    <Map>
                        <Link to="https://www.google.com.br/maps/place/R.+Alfredo+Lopes,+1717+-+Jardim+Macarengo,+São+Carlos+-+SP,+13560-460/@-22.0074579,-47.8838125,17z/data=!3m1!4b1!4m5!3m4!1s0x94b876d5e2c68a51:0xf8989bb472e252c5!8m2!3d-22.0074629!4d-47.8816238">
                            <MapImageContainer>
                                <StaticImage
                                    src="../../assets/images/map.svg"
                                    alt="Mapa"
                                    placeholder="blurred"
                                    style={{ borderRadius: 40 }}
                                    width={600}
                                />
                            </MapImageContainer>
                        </Link>
                    </Map>
                </Informations>

                <Footer>
                    <FooterImageContainer>
                        <StaticImage
                            src="../../assets/images/brand.svg"
                            alt="Brand"
                            placeholder="blurred"
                            style={{ zIndex: 1 }}
                        />
                    </FooterImageContainer>

                    <Copyright>
                        <span>Todos os direitos reservados ©</span>
                        <span>2022</span>
                    </Copyright>
                </Footer>
            </Contact>
        </Container>
    );
}
