import React from 'react'
import logo from 'assets/fotosplash.svg'

const Header = () => {
    return (
        <div className='header rw-flex'>
            <img src={logo} alt="fotosplash"/>

            <input type="search"/>

            <button>Add a photo</button>
        </div>
    )
}

export default Header
