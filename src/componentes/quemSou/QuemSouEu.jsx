import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quem } from './styles.js';
import Button from '../button/Button.jsx';

const QuemSouEu = () => {
    const intervaloRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.minhaFoto', {
            x: 0,
            rotate: "0deg",
            opacity: 1,
            duration: "1",
        });

        gsap.to('.text', {
            y: 0,
            opacity: 1,
            delay: 3,
            duration: "1",
        });

        let startValue = "10% 5%";
        let endValue = "40% 20%";

        if (window.innerWidth <= 765) {
            startValue = "45% 5%";
            // endValue pode permanecer o mesmo ou você pode ajustá-lo também se necessário
        }

        gsap.to('.button', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".quem",
                scrub: true,
                start: startValue, // Quando o topo do elemento atinge o centro da viewport
                end: endValue, // Quando o fundo do elemento atinge o centro da viewport
                // markers: true // Adiciona marcadores para depuração
            }
        });

        return () => {
            
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf('.txt1')
        };
    }, []);

    useEffect(() => {
        function inserirNome() {
            const spanNome = document.getElementById('name');
            const text = document.getElementsByClassName('text');
            spanNome.textContent = ""; // Limpa o conteúdo existente
            let index = 0;
            let isCursorVisible = true; // Variável para controlar a visibilidade do cursor
            const meuNome = "lá, sou Denilson..."; // Substitua pelo seu nome
            let currentText = "";
        
            intervaloRef.current = setInterval(function() {
                if (isCursorVisible) {
                    // Adiciona a barra vertical ao texto atual
                    spanNome.textContent = currentText + '|';
                    isCursorVisible = false;
                } else {
                    // Remove a barra vertical e adiciona a próxima letra
                    spanNome.textContent = currentText;
                    if (index < meuNome.length) {
                        currentText += meuNome[index];
                        index++;
                    }
                    isCursorVisible = true;
                }
        
                // Se todas as letras foram inseridas, parar o intervalo
                if (index === meuNome.length && !isCursorVisible) {
                    clearInterval(intervaloRef.current);
                    spanNome.textContent = currentText; // Garante que o texto final não tenha a barra vertical
                    if (textRef.current) {
                        textRef.current.classList.remove('hide');
                    }
                }
            }, 75);
        }

        inserirNome();

        // Limpeza na desmontagem do componente
        return () => {
            clearInterval(intervaloRef.current);
        };
    }, []);

    return (
        <Quem id="quem" className='quem'>
            <div className='max-conteudo'>
                <img className='minhaFoto' src="/assets/img/eu.png" alt="Foto do Denilson Junior." />
                <div className='boxtext'>
                    <h1>O<span id='name'></span></h1>
                    <div className='text'>
                        <p>
                            ... um desenvolvedor front-end apaixonado com cinco anos de experiência na criação de soluções de aprendizagem para empresas.
                        </p>
                        <p>
                            Desde que mergulhei no mundo da programação, tenho dedicado minha energia ao aprimoramento das habilidades e à entrega de soluções de alta qualidade.
                        </p>
                        <p>
                            Durante minha jornada, adquiri um amplo conhecimento em tecnologias front-end, dominando HTML, CSS e JavaScript, incluindo layout responsivo. Além disso, trabalho com ferramentas como PUG, GULP, LESS, SASS e estou familiarizado com frameworks modernos como React.
                        </p>
                        <p>
                            Sou conhecido por ser um colaborador entusiasmado, sempre buscando novos desafios e oportunidades para expandir meu conhecimento e habilidades na área.
                        </p>
                        <p>
                            Com um histórico sólido e um profundo interesse em desenvolvimento web, estou comprometido em impulsionar o sucesso dos projetos em que estou envolvido, contribuindo para o crescimento contínuo da equipe e da empresa.
                        </p>
                    </div>
                    <Button
                        class="button"
                        nome="Download CV"
                        href="/assets/cv0624.pdf"
                        download="cv-Denilson.pdf"
                    />
                </div>
            </div>
        </Quem>
    );
};

export default QuemSouEu;
