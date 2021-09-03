import React from 'react'
import { Typography } from '@material-ui/core'
import imageAmri from '../../assets/images/Capture.png';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline';
import PersonOutlinedOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import resumeData from '../../utils/resumeData';
import CustomButton from '../../components/Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Profile.css';

const CustomTimelineItem = ({title, text, link})=>(
    <TimelineItem>
   <CustomTimelineSeparator />
   <TimelineContent className='timeline_content'>
       
       {title ? (<Typography className='timelineItem_text'><span>{title}: </span><a href={link} target='_blank'>{text}</a></Typography>) : (
           <Typography className='timelineItem_text'><span>{title}:</span>{text}</Typography>
       )}
   </TimelineContent>
    </TimelineItem>
)

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
                <CustomTimeline icon={<PersonOutlinedOutlinedIcon />} >
                <CustomTimelineItem title='Nom' text={resumeData.name} />
                <CustomTimelineItem title='Titre' text={resumeData.title} />
                <CustomTimelineItem title='Date de naissance' text={resumeData.birthday} />
                <CustomTimelineItem title='Email' text={resumeData.email} />
                <CustomTimelineItem title='Job' text={resumeData.job} />

               
                </CustomTimeline>
                <div className='button_container'>
                    <CustomButton text={'Télécharger Cv'} icon={<GetAppIcon />} />
                </div>
               
            </div>
        </div>
    )
}

export default Profile
