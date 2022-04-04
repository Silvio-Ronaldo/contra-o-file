import styled, { css } from 'styled-components';

interface ContainerProps {
    size: string;
    variant: string;
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 45px;
    min-width: 64px;
    max-width: 450px;
    border-radius: 16px;

    font-size: 0.875rem;
    font-weight: 500;

    padding: 12px 16px;

    ${props =>
        props.size === 'medium' &&
        css`
            height: 82px;
            border-radius: 24px;
            font-size: 1.25rem;

            @media (max-width: 1000px) {
                height: 45px;
                border-radius: 16px;
                font-size: 0.875rem;
            }
        `}

    ${props =>
        props.size === 'large' &&
        css`
            height: 120px;
            border-radius: 40px;
            font-size: 1.25rem;
            padding: 12px 64px;

            @media (max-width: 1120px) {
                height: 82px;
                border-radius: 24px;
                font-size: 1.25rem;
            }
        `}

    background-color: ${({ theme }) => theme.colors.secondary900};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};

    ${props =>
        props.variant === 'secondary' &&
        css`
            background-color: transparent;
            border-color: ${({ theme }) => theme.colors.secondary500};
            color: ${({ theme }) => theme.colors.secondary500};
        `}

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;
