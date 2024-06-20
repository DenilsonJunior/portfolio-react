import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Tecnologia from './Item.jsx';
import { Tec } from './styles.js';
import tecnListData from './tecnologias.json';

function Tecnologias() {
    const listRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(listRef.current, {
            opacity: 1,
            scale: 1,
            // duration: 5,
            scrollTrigger: {
                trigger: ".listTecnologias",
                scrub: true,
                start: "0px 550px", // Quando o topo do elemento atinge o centro da viewport
                end: "80% 600px", // Quando o fundo do elemento atinge o centro da viewport
                // markers: true // Adiciona marcadores para depuração
            }
        });

        return () => {
            // Limpeza do efeito quando o componente é desmontado
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(listRef.current);
        }
    }, []);

    return (
        <Tec id="tec" className='listTecnologias'>
            <div ref={listRef} className='max-conteudo'>
                <h1>Tecnologias que domino ou que pretendo estudar.</h1>
                <div className='list'>
                    {tecnListData.map((item, index) => (
                        <Tecnologia 
                            key={index} 
                            image={item.image}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </Tec>
    )
}

export default Tecnologias;
