import styled from 'styled-components';

export const Container = styled.main`
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

export const ButtonHeaderWrapper = styled.div`
    @media (max-width: 690px) {
        display: none;
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
