import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
const ParticlesBg = () =>{

    const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
            options={{
                background: {
                    color: 'transparent',
                    // color: 'red',
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: 'canvas',
                    // events: {
                    //     resize: true
                    // },
                    events: {
                        resize: true,
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        }
                    },
                      modes: {
                        bubble: {
                            distance: 250,
                            duration: 1,
                            size: 2,
                            opacity: 0
                        },
                        repulse: {
                            distance: 200,
                            duration: 9,
                        }
                    }
                },
                particles: {
                    color: {
                        value: "FFFFFF"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 500,
                    },
                    opacity: {
                        animation: {
                        enable: true,
                        minimumValue: 0.5,
                        speed: 1,
                        sync: false,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.1,
                        },
                        value: 1,
                    },
                    shape: {
                        type: 'circle',
            
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 1,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: "none",
                        random: true,
                        straight: true,
                        out_mode: "out",
                        bounce: true,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    },
                     line_linked: {
                        enable: false
                    },
                }
            }}
      /> 

  </div>
  );
}

export default ParticlesBg