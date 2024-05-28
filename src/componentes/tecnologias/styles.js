import styled from 'styled-components';

export const Tec = styled.div`
    padding: 5rem 0;
    /* background-color: #0003; */
    background-color: var(--bg);
    .max-conteudo {
        max-width: 1200px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 768px) {
            width: 85%;
        }
        h1 {
            color: var(--text-color-reverse);
        }
        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 2em 0 0;
            .card {
                /* filter: drop-shadow(.3rem .5rem .5rem rgba(0, 0, 0, .3)); */
                background-color: var(--tec-card);
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 100%;
                filter: drop-shadow(0rem 0.4rem 0.2rem rgba(0, 0, 0, .3));
                position: relative;
                @media (max-width: 768px) {
                    width: 4.5rem;
                    height: 4.5rem;
                }
                img {
                    width: 60%;
                    filter: drop-shadow(0.2rem 0.2rem 0.1rem rgba(0, 0, 0, .2));
                    position: absolute;
                }
            }
        }
    }
`;