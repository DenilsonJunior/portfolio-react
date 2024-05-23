import styled from 'styled-components';

export const Quem = styled.section`
    /* background-color: #0005; */
    .max-conteudo {
        max-width: 1200px;
        width: 80%;
        display: flex;
        align-items: center;
        gap: 3rem;
        margin: 0 auto;
        padding: 5em 0;
        /* background-color: #0005; */
        @media (max-width: 768px) {
            width: 85%;
            flex-wrap: wrap;
        }
        img {
            width: 30%;
            margin: 0 auto;
            filter: drop-shadow(.3rem .5rem .5rem rgba(0,0,0,.3));
            @media (max-width: 768px) {
                width: 60%;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: var(--text-color);
            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }
`;
