import React,{useState} from 'react';
import './Portfolio.css';
import {Grid, Icon, Paper, Tabs, TextField, Typography, Tab, Card, CardActions, CardActionArea, CardMedia, CardContent, Grow} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
const Portfolio = () => {
    const [tabValue, setTabValue]= useState("Tout");
    return (
        <Grid container className="section pt_45 pb_45">
            {/* titre */}
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>
            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor="white" className="custom_tabs" onChange={(event,newValue)=>setTabValue(newValue)}>
                <Tab label="Tout" value="Tout" className={tabValue == "Tout" ? "customTabs_item active" : "customTabs_item"} />
                
                {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                    <Tab label={tag} value={tag} className={tabValue == "Tout" ? "customTabs_item active" : "customTabs_item"} />
                     
                ))}
                
                
                </Tabs>
            </Grid>
        
            {/* Projets */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {resumeData.projects.map(project => (
                        <>
                        {tabValue == project.tag || tabValue == 'Tout' ? (
                             <Grid item>
                             <Grow in timeout={1000}>
                                 <Card className='customCard' onClick={()=>console.log("hehe")} >
                                     <CardActionArea>
                                         <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                         <CardContent>
                                             <Typography className='customCard_title'>{project.title}</Typography>
                                             <Typography className='customCard_description'>{project.description}</Typography>
                                         </CardContent>
                                     </CardActionArea>
                                 </Card>
                             </Grow>
                         </Grid>
                        ) : null}
                       
                        </>
                    ))}
                </Grid>
            </Grid>
        
        
        </Grid>
    )
}

export default Portfolio

