import styled from 'styled-components';

export const HeaderContainer = styled.header.attrs(props => ({
    // Utilize a propriedade 'as' para encapsular o componente em um novo elemento
    as: 'header',
    // Remova a propriedade 'isTrue' para evitar passá-la para o DOM
    isTrue: undefined
}))`
    width: 100%;
    background-color: #6200ea;
    display: flex;
    justify-content: flex-end;
    padding: 1em;

    button {
        border: none;
        background-color: transparent;
        color: ${({ isTrue }) => (isTrue ? 'var(--white)' : 'var(--black)')};
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        position: relative;
        z-index: 1;
    }

    .boxMenu {
        display: ${({ isTrue }) => (isTrue ? 'none' : 'flex')};
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: .3rem;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: ${({ modoEscuro }) => (modoEscuro ? '#0005' : 'transparent')};
        top: 0;
        left: 0;
        a {
            text-decoration: none;
            color: ${({ isTrue }) => (isTrue ? 'var(--white)' : 'var(--black)')};
        }
    }
`;
