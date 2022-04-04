import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Container, AboutCards, AboutCard } from './styles';

export function About() {
    return (
        <Container id="about">
            <StaticImage
                src="../../../assets/images/peanuts.svg"
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
                        src="../../../assets/images/healthy-food.svg"
                        alt="Comida saudável"
                        placeholder="blurred"
                    />
                    <h5>Comida vegana saudável e fresca</h5>
                    <p>
                        Não importa se você começou ontem no veganismo ou já
                        está no caminho a tempos, temos algo que vai agradar o
                        seu paladar.{' '}
                    </p>
                </AboutCard>

                <AboutCard>
                    <StaticImage
                        src="../../../assets/images/local-producers.svg"
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
                        src="../../../assets/images/acessible.svg"
                        alt="Acessível a todos"
                        placeholder="blurred"
                    />
                    <h5>
                        Acessível a<br /> todos
                    </h5>
                    <p>
                        Comida vegana não precisa ser cara e inacessível, o
                        Contra o Filé tenta democratizar o acesso a esse tipo de
                        produto.
                    </p>
                </AboutCard>
            </AboutCards>
        </Container>
    );
}
