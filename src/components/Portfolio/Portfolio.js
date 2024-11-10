
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Portfolio.scss'
import portfolioData from '../../Data/portfolio.json'

const Portfolio = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)
    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);

    }, [])

    const renderPortfolio = (portfolio)=> {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, index)=>(
                        // <div>
                        
                            <div key = {index} className = "image-box">

                                <img 
                                    src= {port?.cover}
                                    alt = "portfolio"
                                    className = "portfolio-image"
                                />
                                <div className= "content">
                                    <p className= "title">{port?.title}</p>
                                    <p className = "skills">{port?.skills}</p>
                                    <p className = "description">{port?.description}</p>
                                    <button 
                                    className= "btn"
                                    onClick={()=>window.open(port.url)}
                                    >View</button>
                                </div>
                                
                                

                            </div>
                        // </div>
                    ))
                }
               

            </div>
        )

    }

    return(
        <>
        <div className = "container portfolio-page">

                <h1 className = 'page-title'> 

                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx = {15}
                    />
                
               
                </h1>
                <div className = "portfolio-list">
                    {renderPortfolio(portfolioData.portfolio)}
                </div>
                

                <Loader type="pacman" />

            

        </div>
        
       </>
    )
}

export default Portfolio