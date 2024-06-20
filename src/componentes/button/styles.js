import styled from 'styled-components';

export const LinkPadrao = styled.a`
    width: fit-content;
    margin: 0 auto;
    padding: .5rem 1.5rem;
    border: solid var(--corButton) .2em;
    background-color: transparent;
    background-color: var(--bg-color);
    box-shadow: .3rem .3rem .5rem #0003;
    border-radius: .8rem;
    transition-duration: .3s;
    text-decoration: none;
    &:hover {
        transform: scale(.95);
    }

    p {
        color: var(--corButton);
        font-weight: 600;
    }
`

export const BtnPadrao = styled.button`
    width: fit-content;
    margin: 0 auto;
    padding: .5rem 1.5rem;
    border: solid var(--corButton) .2em;
    background-color: transparent;
    background-color: var(--bg-color);
    box-shadow: .3rem .3rem .5rem #0003;
    border-radius: .8rem;
    transition-duration: .3s;
    &:hover {
        transform: scale(.95);
    }

    p {
        color: var(--corButton);
        font-weight: 600;
    }
`