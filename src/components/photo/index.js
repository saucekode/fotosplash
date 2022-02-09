import React from 'react';
import Button from 'components/UI/button'

const Photo = ({src, action}) => {
  return (
    <div className='single-photo'>
      <img src={src} alt={src} /> 
      {/* <div className='delete_photo'>
        <Button text='Delete' bgColor='#EB5757' action={action}/>
      </div> */}
    </div>
  )
};

export default Photo;
