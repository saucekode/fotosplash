import {useState} from 'react'
import axios from 'axios'
import logo from 'assets/fotosplash.svg'
import dropdown from 'assets/images/down-arrow.png'
import Button from 'components/UI/button'
import logout from 'assets/images/power-off.png'
import Modal from 'components/UI/modal';
import Popup from 'components/UI/popup';
import { API_BASE_URL, GOOGLE_AUTH_URL } from 'appconstants';
import { getUser, header } from 'services/Backend';
import google from 'assets/images/google.png'
import { Link, Router } from 'react-router-dom'

const Header = ({action, profile}) => {
    const 
    {
        isAuthenticated,
        data,
    } = profile;

    const [showAddPhotoModal, setShowAddPhotoModal] = useState(false)
    const [photoForm, setPhotoForm] = useState({
        photoLabel: "",
        image: ""
    })

    console.log(photoForm)

    const handleChange = (evt) => {
        const value = evt.target.value;
        setPhotoForm({
          ...photoForm,
          [evt.target.name]: value
        });
    }

    const addPhoto = () => {
        axios.post(`${API_BASE_URL}/api/v1/photo/addphoto/${getUser.data.userId}`, photoForm, header).then(res => {
            setPhotoForm(res.data)
            // toast.success("Photo added successfully! 🎉 🪅 🎊", {
            //     position: toast.POSITION.TOP_RIGHT
            // })
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

    // console.log(user)

    return (
        <div className='rw-flex header'>
            <div className='rw-flex header-left'>
                <div className='logo-body'>
                    <img src={logo} alt="fotosplash"/>
                </div>
                <input type="text" placeholder='Search by name'/>
            </div>

            {
                isAuthenticated
                ?
                <div className='rw-flex'>
                    <Button
                        text="Add a photo"
                        bgColor="#3DB46D"
                        action={() => setShowAddPhotoModal(true)}
                    />
                    <div className='rw-flex profile-block'>
                        <div className='profile'>
                            <img src={data?.userPhoto} alt="user profile"/>
                        </div>
                        <p>Welcome, {data?.firstName}</p>
                        <div className='logout' onClick={action}>
                            <img src={dropdown} alt="logout" title='Log out'/>
                        </div>
                    </div>

                    <div className='menu'>
                        
                        <div className='logout' onClick={action}>
                            <span>Logout</span><img src={logout} alt="logout" title='Log out'/>
                        </div>
                    </div>
                </div>

                :

                <a href={GOOGLE_AUTH_URL} className='btn-login rw-flex'>
                    <img style={{width: '20px', height: '20px'}} src={google} alt="google"/>
                    <p style={{paddingLeft: '10px', fontWeight: 'bold'}}>Login with Google</p>
                </a>
            }

            {
                showAddPhotoModal

                &&

                <Modal>
                    <Popup>
                        <p className='font-lg pb-15'>Add a new photo</p>
                        <label className='font-md text-bold'>Label</label><br/>
                        <input type='text' name="photoLabel" className='photo-input' value={photoForm.photoLabel} onChange={handleChange} placeholder='Enter photo label'/><br/>
                        <div className='pt-10'></div>
                        <label className='font-md text-bold'>Photo URL</label><br/>
                        <input type='text' name="image" className='photo-input' value={photoForm.image} onChange={handleChange} placeholder='https://www.imageurl.com'/>
                        <div className='cancel-submit pt-15'>
                            <p className='font-md' onClick={() => setShowAddPhotoModal(false)}>Cancel</p>
                            <Button text='Submit' bgColor='#3DB46D' action={addPhoto}/>
                        </div>
                    </Popup>
                </Modal>

                
            }

        </div>
    )
}

export default Header
