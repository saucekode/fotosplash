import './App.css';
// import { useState } from 'react';
// import Header from 'components/header';
// import Body from 'components/body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import OAuthRedirect from 'components/OAuthRedirect';
import Profile from 'pages/Profile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/oauth2/redirect" component={OAuthRedirect}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Body/> */}
    </div>
  );
}

export default App;
