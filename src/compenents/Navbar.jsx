import React, { useEffect, useState } from 'react'

import './Navbar.css'
import logo from '../assets/netflix-logo.png'

const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src={logo}
                alt="netflix logo"
                className='nav__logo'
            />
            <div className='nav__avatar-dev' />
        </div>
    )
}

export default Navbar