import './App.css';
// import { useState } from 'react';

// import Body from 'components/body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Photos from 'pages/Photos';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Body/> */}
    </div>
  );
}

export default App;
