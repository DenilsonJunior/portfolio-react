import styled from 'styled-components';

export const Quem = styled.section`
    /* background-color: #0005; */
    position: relative;
    box-shadow: 0rem 1rem 1rem 0rem rgba(0, 0, 0, 0.2);
    overflow-y: hidden;

    &::before {
        content: '';
        background-image: var(--bg-capa);
        background-size: cover;
        background-position: center;
        background-color: #0005;
        width: 35%;
        height: 100%;
        position: absolute;
        left: 0%;
        top: 0;
        @media (max-width: 768px) {
            width: 100%;
            height: 16rem;
        }
    }

    .max-conteudo {
        max-width: 1200px;
        width: 80%;
        display: flex;
        align-items: center;
        gap: 3rem;
        margin: 0 auto;
        padding: 5em 0;
        @media (max-width: 768px) {
            width: 85%;
            flex-wrap: wrap;
        }

        .minhaFoto {
            width: 40%;
            margin: 0 auto;
            filter: drop-shadow(0rem 0.5rem 0.2rem rgba(0,0,0,.5));
            transform: translateX(-1000px) rotate(180deg);
            opacity: 0;

            @media (max-width: 768px) {
                width: 60%;
            }
            @media (max-width: 480px) {
                width: 80%;
            }
        }

        .boxtext {
            width: 60%;
            @media (max-width: 768px) {
                width: 100%;
            }
            .text {
                margin: 1rem 0 0;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                position: relative;
                z-index: 1;
                opacity: 0;
                transform: translateY(10rem);
                /* &.text1 {
                } */
            }
            .button {
                margin-top: 2rem;
                transform: translateY(10rem);
                opacity: 0;
            }
        }

    }

    /* .animation1 {
        transform: translateY(500px);
        opacity: 0;
    }

    .animation2 {
        transform: scale(.8);
        opacity: 0;
    } */
`;
