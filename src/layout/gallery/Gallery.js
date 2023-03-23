import classes from './gallery.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Gallery = () => {

    return (
        <section className='section'>
            <header>
                <h2 className="heading-secondary">Gallery</h2>
            </header>
            <Swiper
                spaceBetween={ 30 }
                centeredSlides={ true }
                autoplay={ {
                    delay: 3500,
                    disableOnInteraction: false
                } }
                pagination={ {
                    clickable: true
                } }
                navigation={ false }
                modules={ [Autoplay, Pagination, Navigation] }
                className={ classes.mySwiper }
            >
                <SwiperSlide className={ classes["swiper-slide"] }>
                    <picture className="picture">
                        <img src="https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
                            alt=""
                            className="img" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide className={ classes["swiper-slide"] }>
                    <picture className="picture">
                        <img     src="https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80"
                            alt=""
                            className="img" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide className={ classes["swiper-slide"] }>
                    <picture className="picture">
                        <img src="https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                            alt=""
                            className="img" />
                    </picture>
                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default Gallery;