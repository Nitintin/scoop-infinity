import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const SwiperSlider = () => {
    return (
        <Swiper
            className="desktopSwiper"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="firstSlide swiper-slider-custom">
                <a href="/entertainment/movies-that-were-copied/?ref=read_masthead" class="masthead has-overlay" >
                    <div class="masthead-details">
                        <a class="read-tag read-tag--blue" href="/category/entertainment/?ref=home_masthead">Entertainment
                        </a>
                        <h1 class="read-head">
                            <a href="/entertainment/movies-that-were-copied/?ref=read_masthead">16 Fan Favourite Cult Movies That You Didn't Know Were Copied
                            </a>
                        </h1>
                        <div class="read-more">
                            <a class="read-more--blue" href="/entertainment/movies-that-were-copied/?ref=read_masthead">Read Article
                            </a>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    );
}

export default SwiperSlider
