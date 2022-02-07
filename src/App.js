import './App.css';
import { useState, useEffect } from 'react';
// import Body from 'components/body';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Login from 'pages/Login';
import Photos from 'pages/Photos';
import PrivateRoute from 'services/PrivateRoute';
import { ACCESS_TOKEN, API_BASE_URL } from 'appconstants';
import { ToastContainer } from 'react-toastify';
import { redirectHandler } from 'utils/OauthRedirectHandler';
import axios from 'axios';

function App() {

  const token = redirectHandler('token');
  const authError = redirectHandler('error');
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const [user, setUser] = useState({
    isAuthenticated: false,
    data: {}
  })

  const OAuthRedirect = () => {
    
    if(token){
        localStorage.setItem(ACCESS_TOKEN, token)
        return <Navigate to="/photos"/>   
    }else{
        return (  
            <>
                <Navigate to="/"/>   
                <ToastContainer>
                    {authError}
                </ToastContainer>
            </>
        )
    }
    
  };

  const logoutHandler = () => {
    localStorage.clear()
    console.log(user)
    setUser({
        isAuthenticated: false,
        data: null
    });
    <ToastContainer>{"logged out"}</ToastContainer>
    return <Navigate to="/"/>
  }

  
  useEffect(() => {

    axios.get(API_BASE_URL + "/api/v1/user/profile", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setUser({
        isAuthenticated: true,
        data: res.data
      })
      
      setCurrentUser(JSON.parse(localStorage.getItem("user")))
      
    })
    
  }, [token])
  

  localStorage.setItem("user", JSON.stringify(user))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route element={<PrivateRoute isLoggedOut={logoutHandler}/>}>
            <Route exact path="/photos" element={<Photos currentUser={currentUser} isLoggedOut={logoutHandler} isLoading={isLoading}/>}></Route>
          </Route>
          <Route exact path="/oauth2/redirect" element={<OAuthRedirect/>}></Route>  
          {/* <Route component={NotFound}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Body/> */}
    </div>
  );
}

export default App;
