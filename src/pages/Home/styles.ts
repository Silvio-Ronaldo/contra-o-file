import styled, { css } from 'styled-components';

interface PackedLunchProps {
    size?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Hero = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;

    /*background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.primary2}
    );*/
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    width: 70%;
    height: 10rem;
    padding: 0;
    margin-top: 10px;

    background-color: transparent;

    nav {
        display: flex;
        align-items: center;

        gap: 2.5rem;
    }
`;

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    h5 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 1rem 0;
    }

    span {
        font-size: 1rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
    }
`;

export const About = styled.section`
    width: 70%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 3.5rem;
    }

    h5 {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;

        margin-top: 1rem;
    }
`;

export const AboutCards = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 4rem;
`;

export const AboutCard = styled.div`
    width: 270px;
    margin: 0 2rem;

    h6 {
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
        line-height: 1.875rem;

        margin-top: 2rem;
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        line-height: 1.25rem;
        text-align: center;

        margin-top: 1.5rem;
    }
`;

export const Menu = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 3.5rem;
    }

    h5 {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;

        margin-top: 1rem;
    }
`;

export const MenuCard = styled.div`
    width: 30rem;
    height: 30rem;
    margin-top: 2.25rem;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 2.5rem;

    background-color: ${({ theme }) => theme.colors.white};
    // filter: blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));

    ul {
        list-style: none;
    }

    ul li {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;

        margin: 1rem;
    }
`;

export const Prices = styled.section`
    width: 70%;

    position: relative;
    justify-content: center;

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 3.5rem;
    }
`;

export const PackedLunch = styled.div<PackedLunchProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
`;

export const PriceDetails = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PriceImageContainer = styled.div`
    width: 320px;
    height: 310px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PriceInfo = styled.div<PackedLunchProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    margin-left: 4rem;

    h2 {
        font-weight: 500;
        font-size: 3rem;
        text-align: center;

        margin-top: 3.5rem;
    }

    span {
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.gray};
        text-decoration: line-through;

        margin-top: 1rem;
    }

    p {
        font-weight: 500;
        font-size: 3.5rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary500};

        margin-top: 1rem;
    }

    ${({ size }) =>
        size === 'medium' &&
        css`
            h2 {
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
            h2 {
                font-size: 1.5rem;
            }

            p {
                font-size: 2rem;
                color: ${({ theme }) => theme.colors.black};
            }
        `};
`;

export const Contact = styled.section`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary50};

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
    }
`;

export const Informations = styled.section`
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const Data = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    h4 {
        font-weight: 500;
        font-size: 2rem;
        text-align: center;

        color: ${({ theme }) => theme.colors.secondary900};
    }

    h6 {
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
    }
`;

export const Map = styled.div`
    width: 540px;
    height: 570px;

    background-color: green;
    border-radius: 40px;
`;

export const Footer = styled.footer`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 4rem;
`;

export const Copyright = styled.div`
    display: flex;
    gap: 4rem;
`;
