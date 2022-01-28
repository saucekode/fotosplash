import {useEffect, useState} from 'react'
import logo from 'assets/fotosplash.svg'
import google from 'assets/google.png'
import { API_BASE_URL, GOOGLE_AUTH_URL } from 'appconstants'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [user, setUser] = useState({
        isAuth: false,
        data: {}
    });

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/userInfo`)
        .then(res => {
            if(res !== []){
                setUser({
                    isAuth: true,
                    data: res.data
                })

                const {authToken} = user;
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(authToken))

                toast.success("Successfully logged in!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
            console.log(res.data)

        }).catch(error => {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }, [user])

    return (
        <div className='login'>
            <div className='verticalAlign'>
                <div className='splash_logo'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <h3 style={{marginTop: '-45px'}}>Welcome to Fotosplash</h3>

                <a href={GOOGLE_AUTH_URL} className='btn-login rw-flex'>
                    <img style={{width: '20px', height: '20px'}} src={google} alt="google"/>
                    <p style={{paddingLeft: '10px', fontWeight: 'bold'}}>Get in here, love</p>
                </a>
            </div>
        </div>
    )
}

export default Login
