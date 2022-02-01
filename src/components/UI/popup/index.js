import React from 'react';

const Popup = ({children, width}) => {
  return (
    <div className='popup' style={{width: width}}>{children}</div>
);
};

export default Popup;
