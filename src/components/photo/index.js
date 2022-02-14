import React from 'react';
import Button from 'components/UI/button'
import { useLocation } from 'react-router-dom';


const Photo = ({src, label, action}) => {

  const location = useLocation()

  return (
    <div className='single-photo'>
      <p>{label}</p>
      <img src={src} alt={src} /> 
      {
        location.pathname === "/dashboard"
        &&
        <div className='delete_photo'>
          <Button text='Delete' bgColor='#EB5757' action={action}/>
        </div>
      }
    </div>
  )
};

export default Photo;
