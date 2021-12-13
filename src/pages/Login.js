import React from 'react'
import logo from 'assets/fotosplash.svg'
import google from 'assets/google.png'

const Login = () => {
    return (
        <div className='login'>
            <div className='verticalAlign'>
                <div className='splash_logo'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <h3 style={{marginTop: '-45px'}}>Welcome to Fotosplash</h3>

                <button className='btn-login rw-flex'>
                    <img style={{width: '20px', height: '20px'}} src={google} alt="google"/>
                    <p style={{paddingLeft: '10px', fontWeight: 'bold'}}>Get in here, love</p>
                </button>
            </div>
        </div>
    )
}

export default Login
