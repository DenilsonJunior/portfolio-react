import { Projeto } from './styles.js';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projetos() {
    return (
        <Projeto>
            <div className='max-conteudo'>
                <h1>Projetos</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className='card'>
                                <div className='boxImage'>
                                    <img src="src/assets/img/tecn1.png" alt="" />
                                </div>
                                <div className='boxText'>
                                    <p>teste</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className='card'>
                                <div className='boxImage'>
                                    <img src="src/assets/img/tecn2.png" alt="" />
                                </div>
                                <div className='boxText'>
                                    <p>teste</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className='card'>
                                <div className='boxImage'>
                                    <img src="src/assets/img/tecn3.png" alt="" />
                                </div>
                                <div className='boxText'>
                                    <p>teste</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className='card'>
                                <div className='boxImage'>
                                    <img src="src/assets/img/tecn4.png" alt="" />
                                </div>
                                <div className='boxText'>
                                    <p>teste</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Projeto>
    )
}

export default Projetos