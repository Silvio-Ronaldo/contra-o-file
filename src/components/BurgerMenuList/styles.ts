import styled from 'styled-components';

interface ContainerProps {
    visible: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    width: 150px;
    right: 0px;
    top: calc(70% + 10px);
    border-radius: 4px;
    padding: 15px 5px;
    display: ${props => (props.visible ? 'block' : 'none')};

    background-color: ${({ theme }) => theme.colors.secondary500};
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.black};
`;

export const LinkList = styled.ul`
    margin: 0;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0;

    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.5em;
    list-style: none;

    li {
        float: left;
        display: block;
        position: relative;

        width: auto;
        margin: 0;
        padding: 0 16px;
        border-radius: 3px;

        &:hover {
            box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
                0 7px 10px -5px rgba(0, 0, 0, 0.15);
            transition: all 150ms ease 0s;
        }
    }
`;

export const StyledLink = styled.a`
    display: inline-flex;
    position: relative;

    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    text-decoration: none;

    line-height: 20px;
    text-transform: uppercase;

    margin: 0;
    padding: 16px;
    min-height: auto;
    width: 80px;

    text-align: center;
    white-space: nowrap;
    will-change: box-shadow, transform;
    touch-action: manipulation;
`;
