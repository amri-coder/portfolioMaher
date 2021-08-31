import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>
                    Amri Maher.
                </Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                Developed by <a href="http://amri-dev.site/" target="_blank">Maher</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
