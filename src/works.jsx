import React, { useEffect, useRef } from 'react';
import '../public/css/works.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Works = () => {

    const title = useRef(null);
    const statement = useRef(null);

    useEffect(() => {
      const el1 = title.current;
      const el2 = statement.current;
      gsap.fromTo(el1, {y: 100, opacity: 0}, {
        scrollTrigger: 
          el1, y: 0, opacity: 1, duration: 1
      })

      gsap.fromTo(el2, {opacity: 0}, {
        scrollTrigger: 
          el2, opacity: 1, duration: 0.3, delay: 0.5
      })

    }, []);

    const boxRefs = useRef([]).current;
    useEffect(() => {
        const boxElements = gsap.utils.toArray('.work');
        boxElements.forEach((box, index) => {
            boxRefs[index] = box;

            gsap.fromTo(
                box, { x: 200, opacity: 0, },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 80%',
                    },
                }
            );
        });
    }, []);
  

    return(
        <div className="works" id='my-works-content'>
            <div className="works-content">
                <img className="network" src="/images/network.png"  />
                <div className="header">
                    <div className="head">
                        <p className='sub-header'>PROJECTS</p>
                        <h1 className="works-header" ref={title}>My Works</h1>
                        <p className='statement' ref={statement}>The following projects provide actual samples <br />
                            of my work that highlight my abilities and experience. <br /> It displays my aptitude <br />
                            for exploring and developing skills, utilising a variety of technologies, <br />
                            and successfully producing a creative projects.
                        </p>

                        <p className='statement2'>The following projects provide actual samples 
                            of my work that highlight my abilities and experience. It displays my aptitude 
                            for exploring and developing skills, utilising a variety of technologies, 
                            and successfully producing a creative projects.
                        </p>
                    </div>
                </div>
                <div className="works-body">
                    <div className="scroll-x">
                        <div className="work work1" ref={(el) => (boxRefs[0] = el)}>
                            <div className="featured-img">
                                <a href="https://jhonfrancisduarte.itch.io/wildwildwest" target='_blank'>
                                    <img src="/images/wildwildwest.png" alt="wildwildwest"/>
                                </a>
                            </div>
                            <div className="description">
                                <h3>Wild Wild West</h3>
                                <p className='work-desc'>A third-person shooter game created with Unity Engine. It has two play mode: a player vs ai and player vs player.</p>
                            </div>
                            <div className="platforms">
                                <img src="/images/Unity-logo.png" alt="unity logo" />
                                <img src="/images/webgl.png" alt="webgl logo" className='webgl'/>
                            </div>
                        </div>
                        <div className="work work2" ref={(el) => (boxRefs[1] = el)}>
                            <div className="featured-img">
                                <a href="https://jhonfrancisduarte.github.io/jfad-motorcycle/" target='_blank'>
                                    <img src="/images/motor.png" alt="motorcycle"/>
                                </a>
                            </div>
                            <div className="description">
                                <h3>Motorcycle</h3>
                                <p className='work-desc'>A model of my first motorcycle. It was modeled using Blender.</p>
                            </div>
                            <div className="platforms">
                                <img className='blender' src="/images/blender.png" alt="blender logo" />
                            </div>
                        </div>
                        <div className="work work3" ref={(el) => (boxRefs[2] = el)}>
                            <div className="featured-img">
                                <a href="https://jhonfrancisduarte.github.io/jfad-ava-assemble-disassemble/" target='_blank'>
                                    <img src="/images/Ava.png" alt="motorcycle"/>
                                </a>
                            </div>
                            <div className="description">
                                <h3>Ava | <span className='desc-span'>Assemble • Disassemble</span></h3>
                                <p className='work-desc'>A comprehensive, step-by-step simulation 
                                to correctly assemble or disassemble a desktop computer made with Unity and Blender.</p>
                            </div>
                            <div className="platforms">
                                <img src="/images/Unity-logo.png" alt="unity logo" />
                                <img src="/images/webgl.png" alt="webgl logo" className='webgl'/>
                                <img className='blender' src="/images/blender.png" alt="blender logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;