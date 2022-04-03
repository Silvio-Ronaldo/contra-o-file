import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
} from './styles';

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
                    alt="Peanuts"
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
                <h5>Segunda-feira</h5>

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
            </Menu>
        </Container>
    );
}
