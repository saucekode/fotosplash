import {useEffect, useState} from 'react'
import Header from 'components/header';
import { photoData } from 'data';
import Photo from 'components/photo';
import noPhoto from 'assets/images/no-pictures.png'
import axios from 'axios';
import { API_BASE_URL } from 'appconstants';
import {  header } from 'services/Backend';


const Photos = ({ action}) => {

    const [photos, setPhotos] = useState();
    

    const allPhotos =  photos.map(photo => (
        <Photo key={photo.id} src={photo.image} action={action}/>
    ))

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/photo/viewphotos`).then(res => {
            setPhotos(res.data.photos)
        })
    })
    

    return (
        <div className='photo_design'>
            
            <>

                <div className='photos'>
                {
                    allPhotos.length === 0 
                        ? 
                    <div className='no_photo'>
                        <img src={noPhoto} alt="empty box"/>
                        <p className='taCenter'>No photos found</p>
                    </div> 
                    : 
                    allPhotos
                }
                </div>
            </>
               
            

            {/* {
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
            } */}
        </div>
    )
}

export default Photos
