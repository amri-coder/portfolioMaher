import React,{useState} from 'react';
import './Portfolio.css';
import {Grid, Icon, Paper, Tabs, TextField, Typography} from '@material-ui/core';

const Portfolio = () => {
    const [tabValue, setTabValue]= useState('Tout');
    return (
        <Grid container className='section pt_45 pb_45'>
            {/* titre */}
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>
            {/* Tabs */}
            <Grid item>
                <Tabs value={tabValue} indicatorColor='white' className='custom_tabs' onChange={(event,newValue)=>setTabValue(newValue)}>

                </Tabs>
            </Grid>

        </Grid>
    )
}

export default Portfolio
