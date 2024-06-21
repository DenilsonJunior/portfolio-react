import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Link from './Link.jsx';
import { Contatos } from './styles.js';
import ListContatos from './contatos.json'

function Contato() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".anima1, .anima3", {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 5,
            scrollTrigger: {
                trigger: ".contatos",
                scrub: true,
                start: "0px 450px", // Quando o topo do elemento atinge o centro da viewport
                end: "250px 580px", // Quando o fundo do elemento atinge o centro da viewport
                // markers: true // Adiciona marcadores para depuração
            }
        });

        gsap.to(".anima2", {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 5,
            scrollTrigger: {
                trigger: ".contatos",
                scrub: true,
                start: "0px 450px", // Quando o topo do elemento atinge o centro da viewport
                end: "250px 580px", // Quando o fundo do elemento atinge o centro da viewport
                // markers: true // Adiciona marcadores para depuração
            }
        });

        return () => {
            // Mata todos os ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // Mata todas as animações gsap
            gsap.killTweensOf(".anima1, .anima3");
            gsap.killTweensOf(".anima2");
        }
    }, []);

    return (
        <Contatos id="cont" className='contatos'>
            <div className='max-conteudo'>
                <h1>Contatos</h1>
                <div className='list'>
                    {
                        ListContatos.map(function(item, index) {
                            return (
                                <Link
                                    key={index} 
                                    classAnima={item.classAnima}
                                    href={item.href}
                                    image={item.image}
                                    text={item.text}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Contatos>
    )
}

export default Contato