import {useEffect, useState} from 'react'
import Photo from 'components/photo';
import axios from 'axios';
import { API_BASE_URL } from 'appconstants';



const Photos = ({ action}) => {

    const [photos, setPhotos] = useState();
    const [photosLoading, setPhotosLoading] = useState(true)
    
    
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/photo/viewphotos`).then(res => {
            setTimeout(() => {
                setPhotosLoading(false)
            }, 2000)
            setPhotos(res.data.photos)
        }).catch(err => console.log(err))
    }, [])
    
    console.log(photos)

    return (
        <div className='photo_design'>
            
            <>

                <div className='photos'>
                {
                    photosLoading
                        ? 
                    <div className='no_photo'>
                        {/* <img src={noPhoto} alt="empty box"/> */}
                        <p className='taCenter'>Photos loading...</p>
                    </div> 
                    : 
                    
                    photos.map(photo => (
                        <Photo key={photo.id} src={photo.image} />
                    ))
                
                }
                </div>
            </>
               
            

            
        </div>
    )
}

export default Photos
