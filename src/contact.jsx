import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    const title = useRef(null);
    const statement = useRef(null);
    useEffect(() => {
      const el1 = title.current;
      const el2 = statement.current;

      gsap.fromTo(el1, {x: 200, opacity: 0}, {
        scrollTrigger: 
          el1, x: 0, opacity: 1, duration: 1
      })

      gsap.fromTo(el2, {x: 200, opacity: 0}, {
        scrollTrigger: 
          el2, x: 0, opacity: 1, duration: 1, delay: 0.5
      })


    }, []);

    return (
        <div className="contact" id='contactme'>
            <div className="contact-greeting-container">
                <h1 ref={title}>Contact Me</h1>
                <h3 className="contact-greeting" ref={statement}>I'm more than happy to hear from you!</h3>
            </div>
        </div>
    );
}

export default Contact;