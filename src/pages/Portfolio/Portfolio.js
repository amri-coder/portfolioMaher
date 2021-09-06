import React,{useState} from 'react';
import './Portfolio.css';
import {Grid, Icon, Paper, Tabs, TextField, Typography, Tab, Card, CardActions, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
const Portfolio = () => {
    const [tabValue, setTabValue]= useState("Tout");
    const [projectDialog, setProjectDialog]=useState(false);
    
    return (
        <Grid container className="section pt_45 pb_45">
            {/* titre */}
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>
            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(event,newValue)=>setTabValue(newValue)}>
                <Tab label="Tout" value="Tout" className={tabValue == "Tout" ? "customTabs_item active" : "customTabs_item"} />
                
                {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                    <Tab label={tag} value={tag} className={tabValue == tag ? "customTabs_item active" : "customTabs_item"} />
                     
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
                                 <Card className='customCard' onClick={()=>setProjectDialog(project)} >
                                     <CardActionArea>
                                         <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                         <CardContent>
                                             <Typography className='customCard_title'>{project.title}</Typography>
                                             <Typography variant='body2' className='customCard_description'>{project.description}</Typography>
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
            <Dialog open={projectDialog} onClose={()=>setProjectDialog(false)}>
            <DialogTitle onClose={()=>setProjectDialog(false)}>
                {projectDialog.title}
            </DialogTitle>
            <img src="" alt="" className="projectDialog_image" />
            <DialogContent>
                <Typography className="projectDialog_description">{projectDialog.description}</Typography>
                
            </DialogContent>
            <DialogActions className="projectDialog_actions">
                {projectDialog?.links?.map(link=>(
                    <a href={link.link} target='_blank' className="projectDialog_icon">{link.icon}</a>
                ))}
            </DialogActions>
        </Dialog>
        
        </Grid>
    )
}

export default Portfolio

