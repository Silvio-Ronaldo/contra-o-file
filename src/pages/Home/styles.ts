import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
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

export const About = styled.section``;

export const AboutCards = styled.div``;

export const Card = styled.div``;
