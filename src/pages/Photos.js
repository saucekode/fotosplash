import {useState} from 'react'
import Header from 'components/header';
import { photoData } from 'data';
import Photo from 'components/photo';
import Modal from 'components/UI/modal';
import Popup from 'components/UI/popup';
import Button from 'components/UI/button'


const Photos = () => {

    const [isToBeDeleted, setIsToBeDeleted] = useState(false);

    const photos =  photoData.map(photo => (
        <Photo key={photo.id} src={photo.image} action={() => setIsToBeDeleted(true)}/>
    ))

    return (
        <div className='photo_design'>
            <Header/>

            <div className='photos'>
            {
                photoData.length === 0 ? <div className='no_photo'>No photos found</div> : photos
            }
            </div>
            {/* <Modal>
                <Popup>
                    <p className='font-lg pb-15'>Add a new photo</p>
                    <label className='font-md text-bold'>Label</label><br/>
                    <input type='text' className='photo-input' placeholder='Enter photo label'/><br/>
                    <div className='pt-10'></div>
                    <label className='font-md text-bold'>Photo URL</label><br/>
                    <input type='text' className='photo-input' placeholder='https://www.imageurl.com'/>
                    <div className='cancel-submit pt-15'>
                        <p className='font-md'>Cancel</p>
                        <Button text='Submit' bgColor='#3DB46D'/>
                    </div>
                </Popup>
            </Modal> */}

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
