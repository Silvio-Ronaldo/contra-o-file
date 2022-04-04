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
    padding: 0 24px 50px;
    margin-bottom: 50px;

    @media (max-width: 860px) {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const HeroImageContainer = styled.div`
    @media (max-width: 860px) {
        display: none;
    }
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

    @media (max-width: 1300px) {
        width: 80%;
    }

    @media (max-width: 1120px) {
        width: 90%;
    }

    nav {
        display: flex;
        align-items: center;

        gap: 2.5rem;
        margin-right: 1.5rem;

        ul {
            display: flex;
            list-style: none;
        }

        ul li {
            margin: 1rem;
            padding: 8px;
            cursor: pointer;

            &:hover {
                box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
                    0 7px 10px -5px rgba(0, 0, 0, 0.15);
                transition: all 150ms ease 0s;
            }
        }

        ul li a {
            color: ${({ theme }) => theme.colors.black};
            text-decoration: none;
            flex: 1;
        }

        @media (max-width: 1300px) {
            gap: 1.5rem;
        }

        @media (max-width: 790px) {
            gap: 1rem;
        }

        @media (max-width: 690px) {
            display: none;
        }
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1300px) {
        div {
            width: 200px;
        }
    }

    @media (max-width: 790px) {
        div {
            width: 130px;
        }
    }
`;

export const BurgerMenu = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    will-change: box-shadow, transform;
    touch-action: manipulation;

    &:hover {
        box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
            0 7px 10px -5px rgba(0, 0, 0, 0.15);
        transition: all 150ms ease 0s;
        cursor: pointer;
    }

    @media (max-width: 690px) {
        display: flex;
        justify-content: center;
        align-items: center;
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

    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 1rem 0;
    }

    span {
        font-size: 1rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
    }

    @media (max-width: 1120px) {
        h1 {
            margin: 0.5rem 0;
        }

        h5 {
            margin: 0.5rem 0;
        }

        span {
            margin-top: 0.5rem;
        }
    }

    @media (max-width: 1000px) {
        h1 {
            font-size: 2.5rem;
        }

        h5 {
            font-size: 1rem;
        }

        span {
            font-size: 0.75rem;
        }
    }
`;

export const About = styled.section`
    width: 70%;
    position: relative;
    margin: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 3.5rem;
    }

    h4 {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;

        margin-top: 1rem;
    }
`;

export const AboutCards = styled.section`
    display: flex;
    justify-content: center;

    margin-top: 64px;

    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 48px;
    }
`;

export const AboutCard = styled.div`
    width: 270px;
    margin: 0 2rem;

    h5 {
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
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    margin: 50px;

    @media (max-width: 1070px) {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 50px;
    }

    h4 {
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;

        margin-top: 16px;
    }
`;

export const MenuImageContainer = styled.div`
    @media (max-width: 1070px) {
        display: none;
    }
`;

export const MenuCard = styled.div`
    width: 30rem;
    height: 350px;
    margin: 32px 0;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 40px;

    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 1170px) {
        height: 300px;
    }

    @media (max-width: 480px) {
        width: 25rem;
    }

    ul {
        list-style: none;
    }

    ul li {
        font-weight: 500;
        font-size: 1rem;
        text-align: center;

        margin: 16px;
    }
`;

export const Prices = styled.section`
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

export const Contact = styled.section`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.primary50};

    h3 {
        font-weight: 500;
        font-size: 2.5rem;
        text-align: center;

        margin-top: 56px;
        margin-bottom: 56px;
    }
`;

export const Informations = styled.section`
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 1250px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Data = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        width: 90%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    h4 {
        font-weight: 500;
        font-size: 2rem;
        text-align: center;

        color: ${({ theme }) => theme.colors.secondary900};
    }

    p {
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 16px;
    }
`;

export const Map = styled.div`
    border-radius: 40px;
    cursor: pointer;

    display: flex;
    justify-content: center;
`;

export const MapImageContainer = styled.div`
    @media (max-width: 1250px) {
        width: 300px;
        height: 300px;
    }
`;

export const Footer = styled.footer`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 24px 0;

    @media (max-width: 640px) {
        flex-direction: column-reverse;
    }
`;

export const FooterImageContainer = styled.div`
    @media (max-width: 1300px) {
        width: 200px;
    }

    @media (max-width: 790px) {
        width: 130px;
    }
`;

export const Copyright = styled.div`
    display: flex;
    gap: 64px;

    @media (max-width: 640px) {
        margin-bottom: 24px;
    }
`;

export const ButtonHeaderWrapper = styled.div`
    @media (max-width: 690px) {
        display: none;
    }
`;
