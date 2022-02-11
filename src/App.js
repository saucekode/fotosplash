import './App.css';
import { useState, useEffect } from 'react';
// import Body from 'components/body';
import Header from 'components/header';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Photos from 'pages/Photos';
import PrivateRoute from 'services/PrivateRoute';
import { ACCESS_TOKEN, API_BASE_URL } from 'appconstants';
import { ToastContainer, toast } from 'react-toastify';
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
        toast.success("Logged in successfully! 🎉 🪅 🎊", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
        return <Navigate to="/"/>   
    }else{
      toast.error(authError + " 😔", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
        return (  
            <>
                <Navigate to="/notfound"/>   
                
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
    toast.success("You logged out successfully! 🎉 🪅 🎊", {
      position: toast.POSITION.TOP_RIGHT
  })
    return <Navigate to="/"/>
  }

  
  useEffect(() => {

    axios.get(API_BASE_URL + "/api/v1/user/profile", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(token){
        setUser({
          isAuthenticated: true,
          data: res.data
        })
      }
      
      setCurrentUser(JSON.parse(localStorage.getItem("user")))
      
    })
    
  }, [token])
  

  localStorage.setItem("user", JSON.stringify(user))

  return (
    <div className="App">
      <Header action={logoutHandler} profile={currentUser}/>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute isLoggedOut={logoutHandler}/>}>
          </Route>
          <Route exact path="/" element={<Photos currentUser={currentUser} isLoading={isLoading}/>}></Route>
          <Route exact path="/oauth2/redirect" element={<OAuthRedirect/>}></Route>  
          {/* <Route component={NotFound}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
