import React, { useEffect, useRef } from "react";
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Experience = () => {

  const title = useRef(null);
  useEffect(() => {
    const el1 = title.current;

    // Media query check
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      gsap.fromTo(el1, {y: 100, opacity: 0}, {
        scrollTrigger: 
          el1, y: 0, opacity: 1, duration: 1
      })
    }

  }, []);

  return (
    <>
      <div className="exp-content">

          <div className="header">
              <div className="head">
                <p>WHAT I'VE ACCOMPLISHED SO FAR</p>
                <h1 className="exp-header" ref={title}>Work Experience</h1>
              </div>
          </div>

          <div className="work-exp">
              <div className="left-side">
                <div className="l-box">
                    <div className="box1">
                      <Tilt className='xs:w-[250px] w-full'>
                          <div className="box1-content box-content">
                            <div className="experience">
                              <div className="img-container">
                                <img src="/images/watts.png" alt="wattsavers logo"/>
                              </div>
                              <h3>Web App Developer</h3>
                              <h5>Wattsavers</h5>
                              <p>Developing web app using Laravel - Livewire framework and WordPress</p>
                            </div>
                          </div>
                      </Tilt>
                  </div>
                  <div className="box2">
                    <Tilt className='xs:w-[250px] w-full'>
                      <div className="box2-content box-content">
                        <div className="experience">
                          <div className="img-container">
                            <img src="/images/workaid.png" alt="workaid logo"/>
                          </div>
                          <h3>Web Developer</h3>
                          <h5>Workaid</h5>
                          <p>Developing websites using WordPress</p>
                        </div>
                      </div>
                    </Tilt>
                  </div>
                  <div className="box3">
                    <div className="box3-content box-content">

                    </div>
                  </div>
                  <div className="box4">
                    <div className="box4-content box-content">

                    </div>
                  </div>
                  <div className="box5">
                    <div className="box5-content box-content">

                    </div>
                  </div>
                  <div className="box6">
                    <div className="box6-content box-content">

                    </div>
                  </div>
                </div>
              </div>
          </div>

      </div>
    </>
  );
}

export default Experience;
