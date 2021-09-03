import React from 'react'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline';
import {Grid, Icon, Paper, Typography} from '@material-ui/core'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';


const Resume = () => {
    return (
        <>

        {/* A propos */}
        <Grid container className='section pb_45 pt_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>À propos de moi</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>


        {/* Education & expériences*/} 
        <Grid container className='section'>
        <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Resume</h6>
            </Grid>
        <Grid item xs={12}>
            <Grid container className='resume_timeline'>

                {/* Expériences */}
                <Grid item sm={12} md={6}>
                    <CustomTimeline title={'Projets'} icon={<WorkIcon />}>
                        {resumeData.experiences.map(experience=> (
                            <TimelineItem>
                                <TimelineSeparator className='separator_padding'>
                                    <TimelineDot variant="outlined" className="timeline_dot" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className='timeline_content'>
                                    <Typography className="timeline_title">{experience.title}</Typography>
                                    <Typography variant="body2"  className="timeline_description">{experience.description}</Typography>
                                    <Typography variant="caption"><a href={experience.lien} target='_blank' style={{textDecoration:'none'}} className="timeline_lien">{experience.lien}</a></Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </Grid>
                {/* Education */}
                <Grid item sm={12} md={6}>
                <CustomTimeline title={'Éducation'} icon={<SchoolIcon />}>
                    {resumeData.educations.map(education=>(
                        <TimelineItem>
                            <CustomTimelineSeparator />
                            <TimelineContent className="timeline_content">

                                <Typography className="timeline_title">
                                    {education.title}
                                </Typography>
                                <Typography variant="caption" className="timeline_date">
                                    {education.date}
                                </Typography>
                                <Typography variant="body2" className="timeline_lien">
                                    {education.description}
                                </Typography>
                                <Typography variant="body2" className="timeline_lien">
                                    {education.desc}
                                </Typography>

                                
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </CustomTimeline>
                </Grid>
            </Grid>
        </Grid>
        </Grid>


        {/* Services */} 
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Services</h6>
            </Grid>  

            <Grid item xs={12}>
                <Grid container spacing={3} justify='space-around'>
                    {resumeData.services.map(service=>(
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'>{service.icon}</Icon>
                                <Typography className='service_title' variant='h6'>
                                    {service.title}
                                </Typography>
                                <Typography className='service_description' variant='body2'>
                                    {service.description}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

        {/* Skills */} 
        <Grid container className='section graybg pb_45 p_50'>
        <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Skills</h6>
            </Grid>  
            <Grid item xs={12}>
                <Grid container justify='space-between' spacing={3}>
                {resumeData.skills.map(skill=>(
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={0} className='skill'>
                            <Typography variant='h6' className='skill_title'>
                                {skill.title}
                            </Typography>
                            {skill.description.map(element=>(
                                <Typography variant='body2' className='skill_description'>
                                    <TimelineDot variant={'outlined'} className='timeline_dot' />
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}

                </Grid>
            </Grid>
                
        </Grid>

        {/* Contact */} 
        <Grid container className='section'>
            {/* formuaire de contact */}
            <Grid item xs={12} lg={7}>

            </Grid>
             {/* contact information */}
             <Grid item xs={12} lg={7}>

</Grid>

        </Grid>
        </>
    )
}

export default Resume
