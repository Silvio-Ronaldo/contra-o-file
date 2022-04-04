import styled, { css } from 'styled-components';

interface PackedLunchProps {
    size?: string;
}

export const Container = styled.section`
    width: 70%;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;

    @media (max-width: 970px) {
        width: 80%;
    }

    @media (max-width: 860px) {
        width: 90%;
    }

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 50px;
    }
`;

export const PackedLunch = styled.div<PackedLunchProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 24px;

    @media (max-width: 770px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PriceDetails = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 770px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PriceImageContainer = styled.div`
    width: 320px;
    height: 310px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1190px) {
        width: 230px;
        height: 220px;
    }
`;

export const PriceInfo = styled.div<PackedLunchProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    margin-left: 32px;

    @media (max-width: 770px) {
        margin-left: 0;
        margin-bottom: 16px;
    }

    h4 {
        font-weight: 500;
        font-size: 3rem;
        text-align: center;

        margin-top: 50px;

        @media (max-width: 1100px) {
            font-size: 2rem;
        }
    }

    span {
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.black};
        text-decoration: line-through;

        margin-top: 16px;
    }

    p {
        font-weight: 500;
        font-size: 3.5rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary500};

        margin-top: 16px;

        @media (max-width: 1100px) {
            font-size: 2rem;
        }
    }

    ${({ size }) =>
        size === 'medium' &&
        css`
            h4 {
                font-size: 2rem;
            }

            p {
                font-size: 2rem;
                color: ${({ theme }) => theme.colors.black};
            }
        `};

    ${({ size }) =>
        size === 'small' &&
        css`
            h4 {
                font-size: 1.5rem;
            }

            p {
                font-size: 2rem;
                color: ${({ theme }) => theme.colors.black};
            }
        `};
`;
