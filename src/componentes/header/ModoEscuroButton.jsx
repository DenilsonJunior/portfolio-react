import React, { useEffect } from 'react';

const ModoEscuroButton = ({ modoEscuro, setModoEscuro }) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', modoEscuro ? 'var(--escuro)' : 'var(--claro)');
        document.documentElement.style.setProperty('--text-color', modoEscuro ? 'var(--claro)' : 'var(--black)');
    }, [modoEscuro]);

    return (
        <button onClick={() => setModoEscuro(!modoEscuro)}>
            {modoEscuro ? '☻' : '☺'}
        </button>
    );
};

export default ModoEscuroButton;