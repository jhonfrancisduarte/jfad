import React, { Suspense, useState, useRef, useEffect } from 'react';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function handleSkillHover(skill) {
  const meterFill = document.querySelector('.meter-fill');
  let skillWidth = 0;

  switch(skill) {
    case 'html5':
      skillWidth = 95;
      break;
    case 'css':
      skillWidth = 90;
      break;
    case 'javascript':
      skillWidth = 80;
      break;
    case 'php':
      skillWidth = 90;
      break;
    case 'scss':
      skillWidth = 60;
      break;
    case 'laravel':
      skillWidth = 85;
      break;
    case 'react':
      skillWidth = 90;
      break;
    case 'three':
      skillWidth = 85;
      break;
    case 'bootstrap':
      skillWidth = 50;
      break;
    case 'wordpress':
      skillWidth = 100;
      break;
    case 'drupal':
      skillWidth = 60;
      break;
    case 'csharp':
      skillWidth = 85;
      break;
    case 'java':
      skillWidth = 70;
      break;
    case 'kotlin':
      skillWidth = 60;
      break;
    case 'c++':
      skillWidth = 40;
      break;
    case 'blender':
      skillWidth = 90;
      break;
    case 'unity':
      skillWidth = 85;
      break;
    case 'android':
      skillWidth = 70;
      break;
    case 'photoshop':
      skillWidth = 60;
      break;
    default:
      break;
  }
  
  // Update meter-fill width
  meterFill.style.width = `${skillWidth}%`;
}

function resetMeterFill() {
  const meterFill = document.querySelector('.meter-fill');
  meterFill.style.width = '0%';
}

const Ball = ({ setHoveredIndex }) => {
  const props1 = 'images/reactjs.png';
  const props2 = 'images/css.png';
  const props3 = 'images/threejs.svg';
  const props4 = 'images/blenderlogo.png';
  const props5 = 'images/html.png';
  const props6 = 'images/javascript.png';
  const props7 = 'images/unity.png';
  const props8 = 'images/laravel.png';
  const props9 = 'images/livewire.png';
  const props10 = 'images/wordpress.png';

  const [decal1] = useTexture([props1]);
  const [decal2] = useTexture([props2]);
  const [decal3] = useTexture([props3]);
  const [decal4] = useTexture([props4]);
  const [decal5] = useTexture([props5]);
  const [decal6] = useTexture([props6]);
  const [decal7] = useTexture([props7]);
  const [decal8] = useTexture([props8]);
  const [decal9] = useTexture([props9]);
  const [decal10] = useTexture([props10]);

  const decals = [decal1, decal2, decal3, decal4, decal5, decal6, decal7, decal8, decal9, decal10];
 
  const initialPositions = [
    [1, 0, 0],
    [-1, 0, 0],
    [-1.5, 1, 0],
    [1.5, -1, 0.5],
    [1, -2, -1.5],
    [-1.3, -1.3, -1.5],
    [-1.5, -1, 0.5],
    [0, -1, 2],
    [0, 1.5, 0],
    [0.3, -2, 1]
  ];

  const [positions, setPositions] = useState(initialPositions);
  const meshRefs = useRef([]);

  useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      const newPositions = initialPositions.map((pos, index) => {
        return [
          pos[0] + Math.sin(time + index) * 0.5,
          pos[1] + Math.cos(time + index) * 0.5,
          pos[2] + Math.sin(time + index) * 0.2
        ];
      });
      setPositions(newPositions);
      // Update mesh positions
      meshRefs.current.forEach((mesh, index) => {
        if (mesh) {
          mesh.position.set(...newPositions[index]);
        }
      });
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {positions.map((pos, index) => (
          <mesh key={index} ref={el => (meshRefs.current[index] = el)}
            castShadow receiveShadow scale={0.35} position={pos}
            onPointerEnter={() => setHoveredIndex(index)}
            onPointerLeave={() => setHoveredIndex(null)}
            >
              <icosahedronGeometry args={[1, 5]} />
              <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} />
              <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decals[index]} depthTest={true}/>
          </mesh>
        ))}
    </Float>
  );
};

const About = () => {

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const birthDate = new Date('1993-03-02');
  const age = calculateAge(birthDate);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const labels = ["ReactJS", "CSS", "ThreeJS", "Blender", "HTML", "JavaScript", "Unity", "Laravel", "Livewire", "WordPress"];

  const pData = useRef(null);
  useEffect(() => {
    const el1 = pData.current;

    // Media query check
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      gsap.fromTo(el1, {x: -300, opacity: 0}, {
        scrollTrigger: 
          el1, x: 0, opacity: 1, duration: 1
      })
    }
  }, []);
  

  return (
    <div className="about" id="aboutme-content">
        <div className="slide" id='scene-container'>
          <img src="images/abstractlines.png" alt="lines" />
        </div>
        <div className="personal-data active" id='personal-data' ref={pData}>
            <div className="p-data-content">
              <h1>Overview.</h1>
              <p className='p'>I am a passionate IT professional armed with a solid foundation in 3D modeling, fullstack development, and graphics design.
                I have the knowledge and technical expertise to tackle complex technological challenges. 
                Driven by a commitment to excellence and a genuine curiosity for innovation.</p>
                <span>Language: English | Tagalog | Cebuano </span>
                <span>| Age: {age}</span>
            </div>
        </div>
        <div className="my-skills">
            <div className="my-skills-content">
              <h2>My Skills</h2>
              <div className="meter-holder">
                <div className="meter-bg"></div>
                <div className="meter-fill"></div>
              </div>
              <p className="sub-header">Web Dev</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('html5')} onMouseLeave={() => resetMeterFill()}>Html5 </span> 
                                        <span onMouseEnter={() => handleSkillHover('css')} onMouseLeave={() => resetMeterFill()}>| CSS </span>
                                        <span onMouseEnter={() => handleSkillHover('javascript')} onMouseLeave={() => resetMeterFill()}>| Javascript </span>
                                        <span onMouseEnter={() => handleSkillHover('php')} onMouseLeave={() => resetMeterFill()}>| PHP </span>
                                        <span onMouseEnter={() => handleSkillHover('scss')} onMouseLeave={() => resetMeterFill()}>| SCSS</span>
              </p>
              <p className="sub-header">Framework</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('laravel')} onMouseLeave={() => resetMeterFill()}>Laravel </span>
                                        <span onMouseEnter={() => handleSkillHover('react')} onMouseLeave={() => resetMeterFill()}>| React </span>
                                        <span onMouseEnter={() => handleSkillHover('three')} onMouseLeave={() => resetMeterFill()}>| Three Js </span>
                                        <span onMouseEnter={() => handleSkillHover('bootstrap')} onMouseLeave={() => resetMeterFill()}>| Bootstrap</span>
              </p>
              <p className="sub-header">CMS</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('wordpress')} onMouseLeave={() => resetMeterFill()}>Wordpress </span>
                                        <span onMouseEnter={() => handleSkillHover('drupal')} onMouseLeave={() => resetMeterFill()}>| Drupal </span>
              </p>
              <p className="sub-header">Programming Languages</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('csharp')} onMouseLeave={() => resetMeterFill()}>C# </span>
                                        <span onMouseEnter={() => handleSkillHover('java')} onMouseLeave={() => resetMeterFill()}>| Java </span>
                                        <span onMouseEnter={() => handleSkillHover('kotlin')} onMouseLeave={() => resetMeterFill()}>| Kotlin </span>
                                        <span onMouseEnter={() => handleSkillHover('c++')} onMouseLeave={() => resetMeterFill()}>| C++</span>
              </p>
              <p className="sub-header">Software Tools</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('blender')} onMouseLeave={() => resetMeterFill()}>Blender </span>
                                        <span onMouseEnter={() => handleSkillHover('unity')} onMouseLeave={() => resetMeterFill()}>| Unity Engine </span>
                                        <span onMouseEnter={() => handleSkillHover('android')} onMouseLeave={() => resetMeterFill()}>| Android Studio </span>
              </p>
              {/* <p onClick={closeThis} className='closeThis'>×</p> */}
            </div>
        </div>
        <div className="my-experience" id='my-experience'>
            <div className="my-experience-content">
              {/* <h2>My Experience</h2>
              <div className="exp-line"></div>
              <p className="sub-header">Wattsavers Energy Services Company</p>
              <p className="exp-comp-web"><a href='http://wattsavers.com.ph/' target='blank'>http://wattsavers.com.ph/</a></p>
              <p className="p p-exp">Web Developer | IT Support</p>
              <div className="exp-line"></div>
              <p className="sub-header">Workaid</p>
              <p className="exp-comp-web"><a href='https://workaid.io/' target='blank'>https://workaid.io/</a></p>
              <p className="p p-exp">Web Developer | IT Support</p>
              <div className="exp-line"></div>
              <p onClick={closeThis} className='closeThis'>×</p> */}
            </div>
        </div>

        <div className="skill-balls" id='my-skills'>
          <div className="skill-ball">
              <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
                  <Ball setHoveredIndex={setHoveredIndex} />
                </Suspense>
                <Preload all />
              </Canvas>
          </div>
          <div className='skill-name'>
            <h1>Skills</h1>
            <p>
            {hoveredIndex !== null && (
              labels[hoveredIndex]
            )}
            </p>
          </div>
        </div>
    </div>
  );
}

export default About;
