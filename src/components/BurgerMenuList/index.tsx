import React from 'react';

import { Container, LinkList, StyledLink } from './styles';

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
