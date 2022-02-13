import { ACCESS_TOKEN } from 'appconstants';
import React from 'react';
import {
    Navigate, Outlet
  } from "react-router-dom";
  
  
const PrivateRoute = ({user}) => {
  
    const token = localStorage.getItem(ACCESS_TOKEN)
    const {isAuthenticated} = user;

    return token && isAuthenticated ? <Outlet/> : <Navigate to="/"/>
};


export default PrivateRoute