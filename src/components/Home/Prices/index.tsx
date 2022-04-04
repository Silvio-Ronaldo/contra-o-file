import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../Button';

import {
    Container,
    PackedLunch,
    PriceDetails,
    PriceImageContainer,
    PriceInfo,
} from './styles';

export function Prices() {
    return (
        <Container id="prices">
            <h3>Preços e Tamanhos</h3>

            <PackedLunch>
                <PriceDetails>
                    <PriceImageContainer>
                        <StaticImage
                            src="../../../assets/images/packed-lunch-large.svg"
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
                            src="../../../assets/images/packed-lunch-medium.svg"
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
                            src="../../../assets/images/packed-lunch-small.svg"
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
        </Container>
    );
}
