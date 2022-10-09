import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import ParticlesBg from '../Particles/Particles'
import './Home.scss'
import Logo from './Logo/Logo'

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "onal".split("")
    const jobArray = "web developer.".split("")


    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timer);

    }, [])

    return (
        <>
        
            <div className="container home-page">
                <div className= "text-zone">
                
                        <h1>
                            <span className = {letterClass}>H</span>
                            <span className = {`${letterClass} _12`}>i,</span>
                            <br/>
                            <span className = {`${letterClass} _13`}>I</span>
                            <span className = {`${letterClass} _14`}>'m</span>
                            <img src = {LogoTitle} alt ="developer"/>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray = {nameArray}
                                idx = {15}
                            />

                            <br/>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray = {jobArray}
                                idx = {19}
                            />
                        </h1>
                        <h2> Full-stack Developer / React Expert / Python Pro </h2>
                        {/* <Link to = "/contact" className= "flat-button">CONTACT ME</Link> */}
                    
                </div>
                <Logo/>


            </div>
               {/* <div className = "particlesBg">
                    <ParticlesBg/>
                </div> */}
            <Loader type = 'pacman'/>
        </>
    )
}
export default Home