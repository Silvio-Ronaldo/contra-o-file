import styled from 'styled-components';

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