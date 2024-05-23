import React from 'react';
import { Quem } from './styles.js';
import minhaImagem from '../../assets/img/eu.png'; // Certifique-se de usar o caminho correto a partir do local onde está o componente

const QuemSouEu = () => {
    return (
        <Quem>
            <img src={minhaImagem} alt="Sua imagem" />
            <div>
                <h1>Quem sou eu?</h1>
                <p>
                    Olá, sou Denilson, um desenvolvedor front-end apaixonado com cinco anos de experiência na criação de soluções de aprendizagem para empresas.
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
        </Quem>
    );
};

export default QuemSouEu;
