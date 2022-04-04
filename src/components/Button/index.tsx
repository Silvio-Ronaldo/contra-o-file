import React from 'react';

import { Container } from './styles';

/*
    Componente botão, usado em toda a aplicação.
*/

interface ButtonProps {
    text: string;
    size: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'disabled';
}

export function Button({ text, size, variant = 'primary' }: ButtonProps) {
    return (
        <Container size={size} variant={variant}>
            {text}
        </Container>
    );
}
