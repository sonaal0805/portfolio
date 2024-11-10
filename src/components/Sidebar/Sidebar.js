import './Sidebar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitile from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import 'animate.css';
import {useMediaQuery} from "@material-ui/core"

const Sidebar = () =>{
    const [showNav, setShowNav] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 600px)')

    return (
        <div className='nav-bar'>
            <Link className = 'logo' to='/home' onClick={() => setShowNav(false)}>
                <img src = {LogoS} alt = 'logo'/>
                {/* <img className = "sub-logo" src = {LogoSubtitile} alt = 'sonal'/> */}
            </Link>
            <nav className={isDesktop ? '': showNav ? 'mobile-show animate__animated animate__fadeInRight' : 'mobile-show animate__animated animate__fadeOutLeft'}>
                <NavLink exact = "true" activeclassname= "active" to = "/home" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
                </NavLink>
                 <NavLink exact = "true" activeclassname= "active" className = "about-link" to = "/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon = {faUser} color = "#4d4d4e"/>
                </NavLink>

                <NavLink exact = "true" activeclassname= "active" className = "portfolio-link" to = "/projects" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e"/>
                </NavLink>

                 <NavLink exact = "true" activeclassname= "active" className = "contact-link" to = "/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e"/>
                </NavLink>
            
                {!isDesktop&&
                    <a target="_blank" rel = "noreferrer" href ="https://www.linkedin.com/in/sonal-chandra-a41b53141/">
                        <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" onClick={() => setShowNav(false)}/>
                    </a>
                }

                    {/* <FontAwesomeIcon 
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color="#ffd700"
                        size="3x"
                        className='close-icon' /> */}
                
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel = "noreferrer" href ="https://www.linkedin.com/in/sonal-chandra-a41b53141/">
                        <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel = "noreferrer" href ="https://github.com/sonaal0805">
                        <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>

                    </a>
                </li>

            </ul>
           
            
            

            <FontAwesomeIcon 
                onClick={() => setShowNav(prev => !prev)}
                // onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="2x"
                className='hamburger-icon' />
    

        </div>
    )
}

export default Sidebar