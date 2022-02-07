import React from 'react'
import logo from 'assets/fotosplash.svg'
import Button from 'components/UI/button'
import logout from 'assets/images/power-off.png'

const Header = ({action, profile}) => {
    const 
    {
        userPhoto,
        firstName,
        lastName,
        email
    } = profile;

    return (
        <div className='rw-flex'>
            <div className='rw-flex header-left'>
                <div className='logo-body'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <input type="text" placeholder='Search by name'/>
            </div>

            <div className='rw-flex'>
                <Button
                    text="Add a photo"
                    bgColor="#3DB46D"
                />
                <div className='rw-flex profile-block'>
                    <div className='profile'>
                        <img src={userPhoto} alt="user profile"/>
                    </div>
                    <p>{firstName} {lastName}</p>
                    <div className='logout' onClick={action}>
                        <img src={logout} alt="logout" title='Log out'/>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default Header
