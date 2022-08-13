import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { HomeRounded, SchoolRounded, WorkRounded, Facebook,Twitter,LinkedIn, GitHub, Telegram } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
            <Navbar expand="lg" sticky='top' className='header'>
                <Nav.Link as={NavLink} to="/" className={'p-0 m-0'}>
                    <Navbar.Brand className='header_home'>
                        <HomeRounded />
                    </Navbar.Brand>
                </Nav.Link>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='header_left'>
                        {/*lien resume */}

                        <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>

                        {/*lien portfolio */}
                        <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</Nav.Link>
                    </Nav>
                    
                    <div className='header_right'>
                        {Object.keys(resumeData.socials).map(key =>(
                            <a href={resumeData.socials[key].link} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                        ))}

                            <CustomButton text={'Engagez moi'} icon={<Telegram />} />
                    </div>
                    
                </Navbar.Collapse>

            </Navbar>
    );
};

export default withRouter(Header);
