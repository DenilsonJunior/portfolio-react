import { Projeto } from './styles.js';

import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Item from './Item.jsx';

function Projetos() {
    const projetoData = [
        {
            image:"tecn1",
            href:"teste",
            title:"Title",
            text:"Teste",
        },
        {
            image:"tecn2",
            href:"teste",
            title:"Title",
            text:"Teste",
        },
        {
            image:"tecn3",
            href:"teste",
            title:"Title",
            text:"Teste",
        },
        {
            image:"tecn4",
            href:"teste",
            title:"Title",
            text:"Teste",
        },
        {
            image:"tecn5",
            href:"teste",
            title:"Title",
            text:"Teste",
        },
    ]

    const [slideView, setSlideView] = useState(1)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 480) {
                setSlideView(1)
            } else if (window.innerWidth < 720) {
                setSlideView(2)
            } else if (window.innerWidth < 1000) {
                setSlideView(3)
            } else {
                setSlideView(4)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <Projeto>
            <div className='max-conteudo'>
                <h1>Projetos</h1>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={slideView}
                    navigation
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {projetoData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Item
                                image={item.image}
                                href={item.href}
                                title={item.title}
                                text={item.text}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Projeto>
    );
}

export default Projetos