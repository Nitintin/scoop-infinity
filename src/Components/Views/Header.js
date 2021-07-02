import React from 'react'
import Navbar from './Navbar'
import Feature from './Feature'
import SwiperSlider from './SwiperSlider'

const Header = () => {
    return (
        <div className="headerContainer">
            <Navbar/>
            <SwiperSlider/>
            <Feature/>
        </div>
    )
}

export default Header
