import React, { useEffect } from 'react';

const ModoEscuroButton = ({ modoEscuro, setModoEscuro }) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--bg-capa', modoEscuro ? 'var(--capa1)' : 'var(--capa2)');
        document.documentElement.style.setProperty('--bg-Menu', modoEscuro ? 'var(--bg-Menu1)' : 'var(--bg-Menu2)');
        document.documentElement.style.setProperty('--bg-color', modoEscuro ? 'var(--color-01)' : 'var(--color-08)');
        document.documentElement.style.setProperty('--text-color', modoEscuro ? 'var(--white)' : 'var(--black)');
        document.documentElement.style.setProperty('--text-color-reverse', modoEscuro ? 'var(--white)' : 'var(--claro)');
        document.documentElement.style.setProperty('--tec-card', modoEscuro ? 'var(--color-07)' : 'var(--color-08)');
        document.documentElement.style.setProperty('--bg', modoEscuro ? 'var(--bg1)' : 'var(--bg2)');
        document.documentElement.style.setProperty('--footer', modoEscuro ? 'var(--color-02)' : 'var(--color-07)');
        document.documentElement.style.setProperty('--bg-arrow', modoEscuro ? 'var(--bg-arrow-02)' : 'var(--bg-arrow-01)');
        document.documentElement.style.setProperty('--corButton', modoEscuro ? 'var(--white)' : 'var(--escuro)');
    }, [modoEscuro]);

    return (
        <button onClick={() => setModoEscuro(!modoEscuro)}>
            {modoEscuro ? '☾' : '✹'}
        </button>
    );
};

export default ModoEscuroButton;