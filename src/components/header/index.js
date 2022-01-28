import React from 'react'
import logo from 'assets/fotosplash.svg'
import Button from 'components/UI/button'

const Header = () => {
    return (
        <div className='header rw-flex'>
            <div className='rw-flex header-left'>
                <div className='logo-body'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <input type="text" placeholder='Search by name'/>
            </div>

            <Button
                text="Add a photo"
                bgColor="#3DB46D"
            />
        </div>
    )
}

export default Header
