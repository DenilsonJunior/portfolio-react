import React, { useEffect, useRef } from 'react';
import { Quem } from './styles.js';
import Button from '../button/Button.jsx';

const QuemSouEu = () => {
    const intervaloRef = useRef(null); // Referência para armazenar o intervalo
    const text = document.getElementById('text');

    // text.fadeIn();
    useEffect(() => {
        
        function inserirNome() {
            const spanNome = document.getElementById('name');
            spanNome.textContent = ""; // Limpa o conteúdo existente
            let index = 0;
            let isCursorVisible = true; // Variável para controlar a visibilidade do cursor
            const meuNome = "lá, sou Denilson..."; // Substitua pelo seu nome
            let currentText = "";
        
            const intervaloRef = setInterval(function() {
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
                    clearInterval(intervaloRef);
                    spanNome.textContent = currentText; // Garante que o texto final não tenha a barra vertical
                }
            }, 150);
        }

        inserirNome();

        // Limpeza na desmontagem do componente
        return () => {
            clearInterval(intervaloRef.current);
            // quando finalizar a escrita:
        };
    }, []);

    return (
        <Quem id="quem">
            <div className='max-conteudo'>
                <img src="/assets/img/eu.png" alt="Foto do Denilson Junior." />
                <div className='text'>
                    <h1>O<span id='name'></span></h1>
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
                    <Button
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
