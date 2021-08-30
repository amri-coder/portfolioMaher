import React from 'react'
import { Typography } from '@material-ui/core'
import imageAmri from '../../assets/images/amri.png';
import CustomTimeline from '../Timeline/Timeline';
import PersonOutlinedOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import resumeData from '../../utils/resumeData';
import './Profile.css';

function Profile() {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={imageAmri} alt="Amri" />
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlinedOutlinedIcon />} />
                <br />
                <button>My Button</button>
            </div>
        </div>
    )
}

export default Profile
