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
                <div className="masthead has-overlay" >
                    <div className="masthead-details">
                        <a className="read-tag read-tag--blue" href="/category/entertainment/?ref=home_masthead">Entertainment</a>
                        <h1 className="read-head">
                            <a href="/entertainment/movies-that-were-copied/?ref=read_masthead">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</a>
                        </h1>
                        <div className="read-more">
                            <a className="read-more--blue" href="/entertainment/movies-that-were-copied/?ref=read_masthead">Read Article</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    );
}

export default SwiperSlider
