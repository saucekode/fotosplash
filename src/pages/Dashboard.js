import Photo from 'components/photo'
import {useState} from 'react'
import { getUser, header } from 'services/Backend'
import Modal from 'components/UI/modal';
import Popup from 'components/UI/popup';
import Button from 'components/UI/button';
import axios from 'axios';
import { API_BASE_URL } from 'appconstants';


const Dashboard = () => {

  const [isToBeDeleted, setIsToBeDeleted] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState();

  const findPhoto = (id) => {
    setIsToBeDeleted(true)
    setPhotoToDelete(getUser?.data?.userPhotos.find(photoId => id === photoId.photoId))
  }

  const deletePhoto = () => {
    axios.delete(`${API_BASE_URL}/api/v1/photo/deletephoto/${getUser.data.userId}/${photoToDelete.photoId}`, header).then(res => {
      console.log(res.data)
      if(res.status === 200){
          // return <Navigate to="/photos"/>
      }
    }).catch(err => {
        // toast.error("Photo could not be added 😔", {
        //     position: toast.POSITION.TOP_RIGHT
        // })
        console.log(err)
    })
  }

  return (
    <div className='dashboard'>
      <h3 className='font-25'>Hi, {getUser?.data?.firstName} {getUser?.data?.lastName} ✌🏼</h3>

      {
        getUser?.data?.userPhotos === null 
        ?
        <div className='pt-20 no-photo-dashboard'>You have no photos uploaded 😩... why?</div>
        :
       <div className='rw-flex pt-20'>
         {
            getUser?.data?.userPhotos.map(photo => (
              <Photo 
                key={photo.photoId} 
                src={photo.image} 
                label={photo.photoLabel} 
                action={() => findPhoto(photo.photoId)}
              />
            ))
         }
       </div>
      }

      {
        isToBeDeleted 
        &&
        <Modal>
            <Popup width='420px'>
                <p className='font-lg pb-15'>Are you sure?</p>
                <div className='cancel-submit pt-15'>
                    <p className='font-md' onClick={() => setIsToBeDeleted(false)}>Cancel</p>
                    <Button text='Delete' bgColor='#EB5757' action={deletePhoto}/>
                </div>
            </Popup>
        </Modal>
      }
    </div>
  )
}

export default Dashboard