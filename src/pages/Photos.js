import {useEffect, useState} from 'react'
import Photo from 'components/photo';
import axios from 'axios';
import { API_BASE_URL } from 'appconstants';
import Modal from 'components/UI/modal';
import Popup from 'components/UI/popup';
import Button from 'components/UI/button';


const Photos = ({ action}) => {

    const [photos, setPhotos] = useState();
    const [photosLoading, setPhotosLoading] = useState(true)
    const [isToBeDeleted, setIsToBeDeleted] = useState(false);
    
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
                        <Photo key={photo.id} src={photo.image} action={() => setIsToBeDeleted(true)}/>
                    ))
                
                }
                </div>
            </>
               
            

            {
                isToBeDeleted 
                &&
                <Modal>
                    <Popup width='420px'>
                        <p className='font-lg pb-15'>Are you sure?</p>
                        <div className='cancel-submit pt-15'>
                            <p className='font-md'>Cancel</p>
                            <Button text='Delete' bgColor='#EB5757'/>
                        </div>
                    </Popup>
                </Modal>
            }
        </div>
    )
}

export default Photos
