import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import './Resume.css'
import resumeData from '../../utils/resumeData'

const Resume = () => {
    return (
        <>

        {/* A propos */}
        <Grid container className='section'>
            <Grid item className='section_title'>
                <span></span>
                <h6 className='section_title_text'>À propos de moi</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>


        {/* Education & expériences*/} 
        <Grid container className='section'>

        </Grid>


        {/* Services */} 
        <Grid container className='section'>

        </Grid>

        {/* Skills */} 
        <Grid container className='section'>

        </Grid>

        {/* Contact */} 
        <Grid container className='section'>

        </Grid>
        </>
    )
}

export default Resume
