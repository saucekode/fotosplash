import React from 'react'
import Header from 'components/header';
import { photoData } from 'data';
import Photo from 'components/photo';


const Photos = () => {

    const photos =  photoData.map(photo => (
        <Photo key={photo.id} src={photo.image}/>
    ))

    return (
        <div className='photo_design'>
            <Header/>

            {
                photoData.length === 0 ? <div>No photos found</div> : photos
            }
        </div>
    )
}

export default Photos
