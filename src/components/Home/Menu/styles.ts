import styled from 'styled-components';

export const Container = styled.section`
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
