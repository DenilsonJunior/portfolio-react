import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './styles.js';

const Header = () => {
    const [isTrue, setIsTrue] = useState(true);
    const [modoEscuro, setModoEscuro] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', modoEscuro ? 'var(--escuro)' : 'var(--claro)');
        document.documentElement.style.setProperty('--text-color', modoEscuro ? 'var(--claro)' : 'var(--black)');
    }, [modoEscuro]);

    return (
        <HeaderContainer isTrue={isTrue}>
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={!isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '☰' : '✖'}
            </button>

            <button onClick={() => setModoEscuro(!modoEscuro)}>
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
