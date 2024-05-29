import styled from 'styled-components';

export const Projeto = styled.section`
    padding: 5rem 0;
    background-color: var(--bg);
    .max-conteudo {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 768px) {
            width: 85%;
        }
        h1 {
            color: var(--text-color-reverse);
        }
    }

    h1 {
        text-align: center;
    }

    a {
        text-decoration: none;
        position: relative;
        width: 100%;
        padding: 1rem;
        .card {
            transition-duration: .2s;
            border-radius: 0.5rem;
            margin: auto .5rem;
            .boxImage {
                border-radius: .5rem;
                width: 100%;
                height: 200px;
                background-color: var(--color-01);
                position: relative;
                z-index: 1;
                padding: 1rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .boxText {
                position: relative;
                top: -5rem;
                width: 100%;
                padding: .5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                /* margin-bottom: 2rem; */
                transition-duration: .2s;
                border-radius: 0 0 .5rem .5rem;
                p {
                    color: white;
                }
            }
    
            &:hover {
                background-color: #0005;
                transform: scale(1.06);
                border-radius: 0.5rem;
                box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.6);
                .boxImage {
                    border-radius: .5rem .5rem 0 0;
                }
                .boxText {
                    top: 0;
                }
            }
        }
    }

`