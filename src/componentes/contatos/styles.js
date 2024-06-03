import styled from 'styled-components';

export const Contatos = styled.section`
    padding: 5rem 0;
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
        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin: 2em 0 0;

            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                text-decoration: none;
                filter: drop-shadow(0rem 0.3rem 0.2rem rgba(0, 0, 0, .3));
                .box {
                    background-color: var(--color-07);
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    transition-duration: .3s;
                    @media (max-width: 480px) {
                        width: 40px;
                        height: 40px;
                    }
                    &:hover {
                        transform: scale(1.1);
                    }
                    img {
                        width: 60%;
                        filter: drop-shadow(0.2rem 0.2rem 0.1rem rgba(0, 0, 0, .2));
                    }
                }
                p {
                    color: var(--text-color);
                    @media (max-width: 480px) {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
`;