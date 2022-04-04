import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { Button } from '../../Button';

import {
    Container,
    Informations,
    Data,
    Map,
    MapImageContainer,
    Footer,
    FooterImageContainer,
    Copyright,
} from './styles';

/*
    Aqui estão as informações de contato e um mapa.
    Ao clicar no mapa, você é redirecionado ao endereço no Maps.
    Ao clicar no botão, é redirecionado ao Whats, para entrar em contato.
*/

export function Contact() {
    return (
        <Container id="contact">
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
                                src="../../../assets/images/map.svg"
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
                        src="../../../assets/images/brand.svg"
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
        </Container>
    );
}
