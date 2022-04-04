import styled from 'styled-components';

export const Container = styled.section`
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
