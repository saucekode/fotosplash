import React from 'react'
import Header from 'components/header';
import { photoData } from 'data';
import Photo from 'components/photo';



const Photos = () => {

    return (
        <div className='photo-body'>
            <Header/>
            {
                photoData.map(photo => (
                    <Photo key={photo.id} src={photo.image}/>
                ))
            }
        </div>
    )
}

export default Photos
