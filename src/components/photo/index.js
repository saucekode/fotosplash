import React from 'react';

const Photo = ({src}) => {
  return <div className='single-photo'><img src={src} alt={src} /></div>
};

export default Photo;
