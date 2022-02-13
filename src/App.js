import './App.css';
import { useState, useEffect } from 'react';
// import Body from 'components/body';
import Header from 'components/header';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Photos from 'pages/Photos';
import PrivateRoute from 'services/PrivateRoute';
import { ACCESS_TOKEN, API_BASE_URL } from 'appconstants';
import { redirectHandler } from 'utils/OauthRedirectHandler';
import axios from 'axios';
import Dashboard from 'pages/Dashboard';
import NotFound from 'pages/NotFound';


function App() {

  const token = redirectHandler('token');
  const authError = redirectHandler('error');
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState({
    isAuthenticated: false,
    data: {}
  })

  const OAuthRedirect = () => {
    
    if(token){
      localStorage.setItem(ACCESS_TOKEN, token)
      return <Navigate to="/"/>   
    }
        
    else{
      console.log("hello")
    }
    
    
};

  const logoutHandler = () => {
    localStorage.clear()
    console.log(user)
    setUser({
        isAuthenticated: false,
        data: null
    });
   
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
    
    })
    
  }, [token])
  
  localStorage.setItem("user", JSON.stringify(user))
  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
        <Header action={logoutHandler} profile={currentUser}/>
        <Routes>
          <Route element={<PrivateRoute isLoggedOut={logoutHandler} user={currentUser}/>}>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          </Route>
          <Route exact path="/" element={<Photos currentUser={currentUser} isLoading={isLoading}/>}></Route>
          <Route exact path="/oauth2/redirect" element={<OAuthRedirect/>}></Route>  
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
