import React from 'react'
import Navbar from './Navbar'
import Feature from './Feature'
import SlickSlider from './SlickSlider'

const Header = () => {
    return (
        <header>
            <Navbar/>
            <SlickSlider/>
            <Feature/>
        </header>
    )
}

export default Header
