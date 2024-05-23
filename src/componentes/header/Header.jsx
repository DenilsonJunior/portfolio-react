import React, { useState } from 'react';
import { HeaderContainer } from './styles.js';
import ModoEscuroButton from './ModoEscuroButton.jsx';

const Header = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [modoEscuro, setModoEscuro] = useState(false);

    return (
        <HeaderContainer>
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={!isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '✖' : '☰'}
            </button>
            
            {isTrue && (
                <div className='boxMenu'>
                    <a href="#a">Quem sou eu</a>
                    <a href="#a">Tecnologias</a>
                    <a href="#a">Projetos</a>
                    <a href="#a">Contatos</a>
                </div>
            )}

            <ModoEscuroButton modoEscuro={modoEscuro} setModoEscuro={setModoEscuro} />
        </HeaderContainer>
    );
};

export default Header;
