import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import CoinManager from './component/CoinManager';

const Navbar = () => {
    const [isOffScreen, setIsOffScreen] = useState(false);
    useEffect(() => {
        const topNav = document.querySelector('.scroll-detector');
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOffScreen(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (topNav) {
            observer.observe(topNav);
        }

        return () => {
            if (topNav) {
                observer.unobserve(topNav);
            }
        };
    }, []);

    const [activeNav, setActiveNav] = useState('home');
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: "end" });
            setActiveNav(sectionId);
        }
    };

    const scrollToHome = () => {
        const homeSection = document.getElementById('welcome');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-me');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAboutMe = () => {
        const aboutSection = document.getElementById('aboutme');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToMyWorks = () => {
        const myWorksSection = document.getElementById('my-works');
        if (myWorksSection) {
            myWorksSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const characterHover = document.querySelector('.character-hover');
        const popMessage = document.querySelector('.pop-message');     
        const handleHover = () => {
            popMessage.classList.toggle('show');
        };
        characterHover.addEventListener('mouseenter', handleHover);
        characterHover.addEventListener('mouseleave', handleHover);
        return () => {
            characterHover.removeEventListener('mouseenter', handleHover);
            characterHover.removeEventListener('mouseleave', handleHover);
        };
    }, []);


    // Animation
    const [animation, setAnimation] = useState('idle');
    const [position, setPosition] = useState(195);
    const [verticalPosition, setVerticalPosition] = useState(0);
    const [direction, setDirection] = useState('right');
    const [isJumping, setIsJumping] = useState(false);
    const [isLanded, setIsLanded] = useState(true);
    const [isDucking, setIsDucking] = useState(false);
    const [isJumpMoving, setIsJumpMoving] = useState(false);
    const [spriteDisplay, setSpriteDisplay] = useState('flex');
    const movementSpeed = 8;
    const jumpHeight = 50;
    const gravity = 5;

    const [score, setScore] = useState(0);
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
    const handleCollectCoin = () => {
        setScore((prevScore) => prevScore + 1);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'd') {
                if (isLanded) {
                    setAnimation('run');
                }else{
                    setIsJumpMoving(true);
                }
                setDirection('right');
            } else if (event.key === 'a') {
                if (isLanded) {
                    setAnimation('run');
                }else{
                    setIsJumpMoving(true);
                }
                setDirection('left');
            } else if (event.key === 'w' && !isJumping && !isDucking && isLanded) {
                setAnimation('jump');
                setIsJumping(true);
                setIsLanded(false);
            } else if (event.key === 's' && !isJumping && isLanded) {
                setAnimation('duck');
                setIsDucking(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === 'd' || event.key === 'a') {
                if (isLanded) {
                    setAnimation('idle');
                    setIsJumpMoving(false);
                }
            } else if (event.key === 's') {
                if(isLanded){
                    setAnimation('idle');
                    setIsDucking(false);
                }
            }
        };

        const moveSprite = () => {
            const screenWidth = window.innerWidth;

            if (isLanded) {
                setPosition((prevPosition) => {
                    if (animation === 'run' && direction === 'right') {
                        const newPosition = prevPosition + movementSpeed;
                        if (newPosition > screenWidth + 30) {
                            setSpriteDisplay('none');
                            return -30;
                        }else{
                            setSpriteDisplay('flex');
                        }
                        return newPosition;
                    } else if (animation === 'run' && direction === 'left') {
                        const newPosition = prevPosition - movementSpeed;
                        if (newPosition < -30) {
                            setSpriteDisplay('none');
                            return screenWidth;
                        }else{
                            setSpriteDisplay('flex');
                        }
                        return newPosition;
                    }
                    return prevPosition;
                });
            }

            if (isJumping) {
                setIsLanded(false);
                setPosition((prevPosition) => {
                    if (direction === 'right' &&  isJumpMoving) {
                        return prevPosition + movementSpeed;
                    } else if (direction === 'left' &&  isJumpMoving) {
                        return prevPosition - movementSpeed;
                    }
                    return prevPosition;
                });
                setVerticalPosition((prevVerticalPosition) => {
                    if (prevVerticalPosition < jumpHeight) {
                        return prevVerticalPosition + gravity;
                    } 
                    else {
                        setIsJumping(false);
                        return prevVerticalPosition;
                    }
                });
            }else if (verticalPosition > 0) {
                setPosition((prevPosition) => {
                    if (direction === 'right' &&  isJumpMoving) {
                        return prevPosition + movementSpeed;
                    } else if (direction === 'left' &&  isJumpMoving) {
                        return prevPosition - movementSpeed;
                    }
                    return prevPosition;
                });
                setVerticalPosition((prevVerticalPosition) => {
                    if (prevVerticalPosition > 0) {
                        return prevVerticalPosition - gravity;
                    } else {
                        return 0;
                    }
                });
            }else if(verticalPosition === 0){
                setIsLanded(true);
                setIsJumping(false);
                if (!isJumping && !isDucking && animation !== 'run') {
                    setAnimation('idle');
                } else if (!isJumping && !isDucking && (direction === 'left' || direction === 'right')) {
                    setAnimation('run');
                }
            }

            setPlayerPosition({ x: position, y: verticalPosition });
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        const intervalId = setInterval(moveSprite, 100);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            clearInterval(intervalId);
        };
    }, [animation, direction, isJumping, verticalPosition, isDucking, spriteDisplay]);
  

    const container = useRef();
    useGSAP(() => {
        gsap.from(".my-name", { x: -300, opacity: 0, duration: 1, delay: 0.4 });
        gsap.from('.hi', {
            scrollTrigger: '.hi', x: -50
        });
      },
      { scope: container }
    );

    const { contextSafe } = useGSAP({ scope: container });
    const onClickRotate = contextSafe(() => {
        gsap.to('.jfad', { rotation: '+=360', duration: 0.2 }).restart();
    });

    return ( 
            <div className="main-div" ref={container}>

                <div className="back-objects-container">
                    <img src="images/svg.png" alt="" />
                    <div className='block2'>
                        <div className="greetings">
                            <h1 className='home-greetings'><span className='hi'>Hi!</span> <span className='my-name'>I'm Francis</span></h1>
                            <h5 className='job-title'>I develop 3D visuals, user interfaces, games</h5>
                            <h5 className='job-title2'>and web applications</h5>
                        </div>
                    </div>

                    <div className="objects">
                        <div className={`sprite-container ${direction}`}
                        style={{ left: `${position}px`, 
                                 display: `${spriteDisplay}`,
                                 bottom: `${108 + verticalPosition}px` 
                            }}
                        >
                            <div className={`sprite ${animation}`}></div>
                        </div>
                        <div className="pop-message"
                        style={{ left: `${position - 55}px`, 
                                display: `${spriteDisplay}`,
                                bottom: `${160 + verticalPosition}px`, 
                            }}
                        >
                            <img src="/images/direction.png" alt="direction" />
                        </div>

                        {/* <div>
                            <h1>Browser Game</h1>
                            <p>Score: {score}</p>
                        </div>

                        <CoinManager
                            onCollectCoin={handleCollectCoin}
                            playerPosition={playerPosition}
                        /> */}
                    </div>
                </div>

                <div className="scroll-detector"></div>
                
                <div className={`top-nav-bar ${isOffScreen ? 'visible' : ''}`}>
                        <div className="logo" onClick={onClickRotate}>
                            <p onClick={scrollToHome}><img className='jfad' src="images/logo.png" alt="logo" width="40" /></p>
                            <span onClick={scrollToHome}>Jhon Francis A. Duarte</span>
                        </div>

                        <div className='nav-items'>
                            <div className='nav-p' onClick={onClickRotate}>
                                <p onClick={scrollToAboutMe}>About Me</p>
                            </div>
                            <div className='nav-p' onClick={onClickRotate}>
                                <p onClick={scrollToMyWorks}>My Works</p>
                            </div>
                            <div className='nav-p' onClick={onClickRotate}>
                                <p onClick={scrollToContact}>Contact Me</p>
                            </div>
                        </div>
                </div>

                <div className="header">

                    <div className="title-section">
                        <div className='block'>
                            <div className="greetings">
                                <h1 className='home-greetings'>Hi! <span>I'm Francis</span></h1>
                                <h5 className='job-title'>I develop 3D visuals, user interfaces, games</h5>
                                <h5 className='job-title2'>and web applications</h5>
                            </div>
                            <div className="call-to-action" onClick={onClickRotate}>
                                <button className='button' onClick={scrollToContact}>
                                    Hire Me
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                    <div className="burger-menu">
                        <img src="images/logo.png" alt="jfad logo" />
                        <ul className="burger-menu-navbar">
                                <li className="navitem">
                                    <a  
                                        href="#"
                                        className={activeNav === 'welcome' ? 'active' : ''} 
                                        onClick={() => scrollToSection('welcome')}
                                    >
                                        Home
                                    </a>
                                </li> 
                                <li className="navitem">
                                    <a
                                        href="#"
                                        className={activeNav === 'aboutme' ? 'active' : ''}
                                        onClick={() => scrollToSection('aboutme')}  
                                    >
                                        About Me
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a
                                        href="#"
                                        className={activeNav === 'my-works' ? 'active' : ''}
                                        onClick={() => scrollToSection('my-works')}  
                                    >
                                        My Works
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a
                                        href="#"
                                        className={activeNav === 'contact-me' ? 'active' : ''}
                                        onClick={() => scrollToSection('contact-me')}  
                                    >
                                        Contact Me
                                    </a>
                                </li>
                        </ul>
                        <div className="copyright-mobile">
                            <p>ⓒ 2024 by JFAD</p>
                        </div>
                    </div>
                    
                    <div className="menu-overlay"></div>
                        
                    <div className="character-hover"
                        style={{ left: `${position}px`, 
                                bottom: `${305 + verticalPosition}px` 
                        }}
                    ></div>
                </div>

            </div>
    );
}
 
export default Navbar;