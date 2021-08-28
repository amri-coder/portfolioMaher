import React from 'react'
import { Typography } from '@material-ui/core'
import imageAmri from '../../assets/images/amri.png';
import CustomTimeline from '../Timeline/Timeline';
import './Profile.css';

function Profile() {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Amri Maher</Typography>
                <Typography className='title'>Développeur Web</Typography>
            </div>
            <figure className='profile_image'>
                <img src={imageAmri} alt="Amri" />
            </figure>

            <div className='profile_information'>
                <CustomTimeline />
                <br />
                <button>My Button</button>
            </div>
        </div>
    )
}

export default Profile
