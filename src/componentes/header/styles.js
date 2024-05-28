import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    /* background-color: #6200ea; */
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    z-index: 2;
    button {
        border: none;
        background-color: transparent;
        color: var(--text-color);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        position: relative;
        z-index: 2;
    }

    .boxMenu {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: .3rem;
        position: fixed;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.8);
        top: 0;
        left: 0;
        backdrop-filter: blur(1rem);
        a {
            text-decoration: none;
            color: var(--white);
        }
    }
`;
