import React from 'react';

import { Container, LinkList, StyledLink } from './styles';

/*
    BurgerMenuList é a lista de navegação que é aberta
    ao clicar no menu hamburguer quando ele está presente.
*/

interface BurgerMenuListProps {
    visible: boolean;
}

export function BurgerMenuList({ visible }: BurgerMenuListProps) {
    return (
        <Container visible={visible}>
            <LinkList>
                <li>
                    <StyledLink href="/#about">Sobre</StyledLink>
                </li>
                <li>
                    <StyledLink href="/#menu">Cardápio</StyledLink>
                </li>
                <li>
                    <StyledLink href="/#prices">Preços</StyledLink>
                </li>
                <li>
                    <StyledLink href="/#contact">Contato</StyledLink>
                </li>
            </LinkList>
        </Container>
    );
}
