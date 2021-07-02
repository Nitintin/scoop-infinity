import React from 'react'
import Navbar from './Navbar'
import Feature from './Feature'
import SwiperSlider from './SwiperSlider'

const Header = () => {
    return (
        <header>
            <Navbar/>
            <SwiperSlider/>
            <Feature/>
        </header>
    )
}

export default Header
