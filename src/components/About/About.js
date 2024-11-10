import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import ParticlesBg from '../Particles/Particles'
import cv from '../../assets/cv_sonal.pdf'

import './About.scss'

const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);

    }, [])

    return (
        <div className='container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"About me".split("")}
                    idx = {15}
                    />
                </h1>
                <p>
                    I'm an ambitious full-stack developer with over 2 years of experience 
                    in building web applications. I am proficient in Python and JavaScript. 
                    Python's Flask and JavaScript's MERN are my go-to frameworks. 

                </p>
                <p>
                    Moreover, I am quietly confident, naturally curious, and perpetually working
                    on improving my chops; one design problem at a time. The tech-space is changing fast. 
                    Being an independent learner and a lover of application development allows me to 
                    adapt to the ever evolving technical landscape.

                </p>
                
                <p>
                    If I need to define myself in one sentence that would be a travel enthusiast, a bike lover, 
                    a cricket maniac, and a tech-obsessed!! 

                </p>
                <p>
                    Visit <a href = "https://www.linkedin.com/in/sonal-chandra-a41b53141/" target='_blank' rel='noopener noreferrer'>my LinkedIn profile</a> for more details. You can also checkout <a href = {cv} target='_blank' rel='noopener noreferrer'>my CV using this link.</a> 
                </p>

            </div> 
           
            

            <div className = 'stage-cube-cont'>
                {/* <div className = "particlesBg">
                    <ParticlesBg/>

                </div> */}
                
                <div className = 'cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4"/>
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529"/>
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9"/>
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon ={faNode} color="black"/>
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#FFFF00"/>
                    </div>     
                    <div className = 'face6'>
                        <FontAwesomeIcon icon ={faPython} color="#52a736"/>
                    </div>

                </div>


            </div>
            <Loader type="pacman" />

        </div>
        
    )
}

export default About