import styled from 'styled-components';

export const Container = styled.section`
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
