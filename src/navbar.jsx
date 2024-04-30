import { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: "end" });
            setActiveNav(sectionId);
        }
    };

    const scrollToContact = () => {
        const thisSectionClass1 = document.querySelector('.my-canvas');
        const thisSectionClass2 = document.querySelector('.homePage');
        const targetClass1 = document.querySelector('.my-canvas3');
        const targetClass2 = document.querySelector('.contactMePage');
        const welcomeSection = document.getElementById('contact-me');
        if (welcomeSection) {
          thisSectionClass1.classList.remove('active');
          thisSectionClass2.classList.remove('active');
          targetClass1.classList.add('active');
          targetClass2.classList.add('active');
          welcomeSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return ( 
            <div className="main-div">

                <div className="header">
                    <div className="help">
                        <img className='help-button' src='public/images/help.png'/>
                        <div className="instruction">
                            <p className='instruction-close'>×</p>
                            <p>Left mouse press and drag to rotate</p>
                            <p>Right mouse press and drag to move</p>
                            <p>Scroll mouse to zoom in and out</p>
                        </div>
                    </div>

                    <div className="title-section">
                        <div className='block'>
                            <div className='info'>
                                <div className="logo">
                                        <a href=""><img src="images/logo.png" alt="logo" width="70"/></a>
                                </div>
                                <div className="under-box">
                                    <span>Jhon Francis A. Duarte</span>
                                    <div className="smedia-icons">
                                        <a href="https://www.facebook.com/francis.duarte.319" target="newtab" className="a f"><ion-icon name="logo-facebook"></ion-icon></a>
                                        <a href="mailto:jhonfrancisduarte12345@gmail.com?subject=Email%20Subject&body=Email%20Body" target="newtab" className="a m"><ion-icon name="mail-outline"></ion-icon></a>
                                        <a href="https://www.linkedin.com/in/jhon-francis-duarte-a93931257/" target="newtab" className="a l"><ion-icon name="logo-linkedin"></ion-icon></a>
                                        <a href="https://www.youtube.com/channel/UCDzjowV4oNJ_KEx2zJaMhYg" target="newtab" className="a y"><ion-icon name="logo-youtube"></ion-icon></a>
                                    </div>
                                </div>
                            </div>
                            <div className="greetings">
                                <h1 className='home-greetings'>Hi! <span>I'm a:</span></h1>
                                <h5 className='job-title'>Web Developer | UX/UI Designer | Software Developer <span>| Game Developer</span></h5>
                                <h5 className='job-title2'>| Game Developer</h5>
                            </div>
                            <div className="call-to-action">
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
                </div>

            </div>
    );
}
 
export default Navbar;