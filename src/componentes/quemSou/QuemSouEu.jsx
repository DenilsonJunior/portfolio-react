import React, { useEffect, useRef } from 'react';
import { Quem } from './styles.js';

const QuemSouEu = () => {
    const meuNome = "Denilson...";
    const intervaloRef = useRef(null); // Referência para armazenar o intervalo
    const text = document.getElementById('text');

    // text.fadeIn();
    useEffect(() => {
        
        function inserirNome() {
            const spanNome = document.getElementById('name');
            spanNome.textContent = ""; // Limpa o conteúdo existente
            let index = 0;
            intervaloRef.current = setInterval(function() {
                // Inserir uma letra do nome a cada 300 milissegundos
                spanNome.textContent += meuNome[index];
                index++;
                // Se todas as letras foram inseridas, parar o intervalo
                if (index === meuNome.length) {
                    clearInterval(intervaloRef.current);
                }
            }, 300);
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
                    <h1>Olá, sou <span id='name'></span></h1>
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
            </div>
        </Quem>
    );
};

export default QuemSouEu;
