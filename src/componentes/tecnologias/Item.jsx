import React, { useState, useEffect } from 'react';
import { Tecnologia } from './styles.js';

function Item(props) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        import(`../assets/img/${props.image}.png`)
            .then(image => setImageSrc(image.default))
            .catch(err => console.error('Erro ao carregar a imagem:', err));
    }, [props.image]);

    return (
        <Tecnologia>
            {imageSrc ? <img src={imageSrc} alt={props.alt} /> : 'Carregando...'}
        </Tecnologia>
    );
}

export default Item;
