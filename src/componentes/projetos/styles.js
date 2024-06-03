import styled from 'styled-components';

export const Projeto = styled.section`
    padding: 0rem 0 2rem;
    /* background-color: var(--bg); */
    .max-conteudo {
        max-width: 1360px;
        width: 100%;
        margin: 0 auto;
        h1 {
            color: var(--text-color-reverse);
            text-align: center;
            margin-bottom: 1rem;
        }
        .swiper-horizontal {
            padding: 0 5rem;
            @media (max-width: 768px) {
                /* width: 3rem; */
            }
            .swiper-wrapper {
                /* justify-content: center; */
            }
        }
        .swiper-button-prev, 
        .swiper-button-next {
            top: 0;
            height: 100%;
            background-color: var(--bg-arrow);
            width: 5rem;
            @media (max-width: 768px) {
                /* width: 3rem; */
            }
            &::after {
                font-size: 2rem;
                color: var(--text-color-reverse);
            }
        }
        .swiper-button-prev {
            left: 0;
        }
        .swiper-button-next {
            right: 0;
        }
    }

    a {
        text-decoration: none;
        position: relative;
        padding: 1rem 1.5rem;
        .card {
            transition-duration: .2s;
            border-radius: 0.5rem;
            margin: auto .5rem;
            .boxImage {
                border-radius: .5rem;
                width: 100%;
                height: 150px;
                background-color: var(--color-01);
                position: relative;
                z-index: 1;
                padding: 1rem;
                @media (max-width: 768px) {
                    height: 120px;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .boxText {
                position: relative;
                top: -150px;
                width: 100%;
                padding: .5rem;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                /* margin-bottom: 2rem; */
                transition-duration: .2s;
                border-radius: 0 0 .5rem .5rem;
                @media (max-width: 768px) {
                    top: -120px;
                }
                .description {
                    width: calc(100% - 25px);
                    /* background-color: #0005; */
                    h4 {
                        color: white;
                        @media (max-width: 768px) {
                            font-size: 12px;
                        }
                    }
                    p {
                        color: white;
                        font-size: 13px;
                        @media (max-width: 768px) {
                            font-size: 10px;
                        }
                    }
                }
                button {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    background-color: transparent;
                    border: solid 2px white;
                    transition-duration: .3s;
                    p {
                        color: white;
                        margin-left: 2px;
                    }
                    &:hover {
                        transform: scale(1.2);
                    }
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