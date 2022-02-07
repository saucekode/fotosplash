import logo from 'assets/fotosplash.svg'
import google from 'assets/images/google.png'
import { GOOGLE_AUTH_URL } from 'appconstants'

const Login = () => {


    return (
        <div className='login'>
            <div className='verticalAlign'>
                <div className='splash_logo'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <h3 style={{marginTop: '-45px'}}>Welcome to Fotosplash</h3>

                <a href={GOOGLE_AUTH_URL} className='btn-login rw-flex'>
                    <img style={{width: '20px', height: '20px'}} src={google} alt="google"/>
                    <p style={{paddingLeft: '10px', fontWeight: 'bold'}}>Login with Google</p>
                </a>
            </div>
        </div>
    )
}

export default Login
