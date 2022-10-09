
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Portfolio.scss'

const Portfolio = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);

    }, [])

    return(
        <>
        <div className = "container portfolio-page">

                <h1 className = 'page-title'> 

                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx = {15}
                    />
                
               
                </h1>
                <div>
                    {/* {renderPo} */}


                </div>

                <Loader type="pacman" />

            

        </div>
        
       </>
    )
}

export default Portfolio