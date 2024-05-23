import React, { useState } from 'react';
import { HeaderContainer } from './styles.js';

const Header = () => {
    const [isTrue, setIsTrue] = useState(true);
    const [modoEscuro, setModoEscuro] = useState(false);

    const toggleModoEscuro = () => {
        setModoEscuro(!modoEscuro);
        if (modoEscuro) {
            document.documentElement.style.setProperty('--claro', 'white');
            document.documentElement.style.setProperty('--escuro', '#1C1F2D');
        } else {
            document.documentElement.style.setProperty('--claro', '#1C1F2D');
            document.documentElement.style.setProperty('--escuro', 'white');
        }
    };

    return (
        <HeaderContainer isTrue={isTrue} modoEscuro={modoEscuro}>
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={!isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '☰' : '✖'}
            </button>

            <button
                onClick={toggleModoEscuro}
            >
                {modoEscuro ? '☻' : '☺'}
            </button>
            
            <div className='boxMenu'>
                <a href="#a">Quem sou eu</a>
                <a href="#a">Tecnologias</a>
                <a href="#a">Projetos</a>
                <a href="#a">Contatos</a>
            </div>
        </HeaderContainer>
    );
};

export default Header;
