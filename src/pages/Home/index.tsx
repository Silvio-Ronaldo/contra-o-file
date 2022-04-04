import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';

import { Button } from '../../components/Button';

import {
    Container,
    Hero,
    Header,
    Main,
    About,
    AboutCards,
    AboutCard,
    Menu,
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
    Footer,
    Copyright,
} from './styles';

export function Home() {
    const date = new Date();

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
                            src="../../assets/images/logo.svg"
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

            <About>
                <StaticImage
                    src="../../assets/images/peanuts.svg"
                    alt="Amendoins"
                    placeholder="blurred"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    height={180}
                    width={180}
                />

                <h3>Nossos valores</h3>
                <h5>Por que escolher o Contra o Filé?</h5>

                <AboutCards>
                    <AboutCard>
                        <StaticImage
                            src="../../assets/images/healthy-food.svg"
                            alt="Comida saudável"
                            placeholder="blurred"
                        />
                        <h6>Comida vegana saudável e fresca</h6>
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
                        <h6>Produtores locais e orgânicos</h6>
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
                        <h6>
                            Acessível a<br /> todos
                        </h6>
                        <p>
                            Comida vegana não precisa ser cara e inacessível, o
                            Contra o Filé tenta democratizar o acesso a esse
                            tipo de produto.
                        </p>
                    </AboutCard>
                </AboutCards>
            </About>

            <Menu>
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

                <h3>Cardápio</h3>

                <Carousel
                    centerMode
                    centerSlidePercentage={20}
                    infiniteLoop
                    autoPlay
                    selectedItem={date.getDay()}
                    showArrows={false}
                    showStatus={false}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h5>Domingo</h5>
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
                        <h5>Segunda-Feira</h5>
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
                        <h5>Terça-Feira</h5>
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
                        <h5>Quarta-Feira</h5>
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
                        <h5>Sexta-Feira</h5>
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
                        <h5>Sábado</h5>
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

            <Prices>
                <StaticImage
                    src="../../assets/images/tomato.svg"
                    alt="Tomate"
                    placeholder="blurred"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 1,
                    }}
                    height={180}
                    width={180}
                />

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
                            <h2>Grande</h2>
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
                            <h2>Média</h2>
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
                            <h2>Pequena</h2>
                            <span>R$ 15,90</span>
                            <p>R$ 15,50</p>
                        </PriceInfo>
                    </PriceDetails>

                    <Button text="Quero a pequena" size="small" />
                </PackedLunch>
            </Prices>

            <Contact>
                <h3>Como nos encontrar?</h3>

                <Informations>
                    <Data>
                        <div>
                            <h4>Atendemos apenas delivery no momento!</h4>
                            <h6>
                                Horário de funcionamento: 11:00H - 15:00H
                                <br />
                                Seg a Sáb.
                            </h6>
                            <h6>
                                Localização: Rua Alfredo Lopes 1717
                                <br /> CEP 13560460
                            </h6>
                            <h6>Telefone: (16) 98765-1234 - Whatsapp</h6>
                        </div>

                        <Button text="Ir para o nosso WhatsApp" size="large" />
                    </Data>

                    <Map>
                        <Link to="https://www.google.com.br/maps/place/R.+Alfredo+Lopes,+1717+-+Jardim+Macarengo,+São+Carlos+-+SP,+13560-460/@-22.0074579,-47.8838125,17z/data=!3m1!4b1!4m5!3m4!1s0x94b876d5e2c68a51:0xf8989bb472e252c5!8m2!3d-22.0074629!4d-47.8816238">
                            <StaticImage
                                src="../../assets/images/map.svg"
                                alt="Mapa"
                                placeholder="blurred"
                                style={{ borderRadius: 40 }}
                            />
                        </Link>
                    </Map>
                </Informations>

                <Footer>
                    <StaticImage
                        src="../../assets/images/brand.svg"
                        alt="Brand"
                        placeholder="blurred"
                        style={{ zIndex: 1 }}
                    />

                    <Copyright>
                        <span>Todos os direitos reservados ©</span>
                        <span>2022</span>
                    </Copyright>
                </Footer>
            </Contact>
        </Container>
    );
}
