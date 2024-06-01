import './App.css'
import Navbar from './navbar'
import About from './about'
import Experience from './Experience.jsx'
import Works from './works.jsx'
import Contact from './contact.jsx'
import Model3 from './AboutMe2.jsx'
import Model4 from './ContactMeModel.jsx'
import HomeModel from './HomeModel.jsx'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import { OrbitControls, useProgress } from '@react-three/drei'
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const CustomOrbitControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  // Set up controls
  useFrame(() => {
    if (controls.current) {
      controls.current.enableZoom = false;
      controls.current.enableRotate = false;
      controls.current.enablePan = true;
      controls.current.update();
    }
  });
  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
};


function App() {
  const canvasClassName = 'my-canvas';
  const canvasClassName2 = 'my-canvas2';
  const canvasClassName3 = 'my-canvas3';
  
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const positionHomeModel = isDesktop ? [-0.15, 0.3, 0] : [0, 0.25, 0]; 
  const rotationHomeModel = isDesktop ? [0, Math.PI / 15, 0] : [0, Math.PI / 7, 0];

  const positionAboutModel = isDesktop ? [0, 0.9, 0] : [0, -0.2, -0.7]; 
  const rotationAboutModel = isDesktop ? [0, Math.PI / 4, 0] : [0, 0, 0];
  
  const positionContactModel = isDesktop ? [0.5,0,-0.5] : [0, 0, 0]; 

  const assignIdToCanvas = () => {
    const canvasElement = document.querySelector(`.${canvasClassName}`);
    if (canvasElement) {
      canvasElement.id = 'welcome';
    }
  };

  const assignIdToCanvas2 = () => {
    const canvasElement = document.querySelector(`.${canvasClassName2}`);
    if (canvasElement) {
      canvasElement.id = 'about';
    }
  };

  const assignIdToCanvas3 = () => {
    const canvasElement = document.querySelector(`.${canvasClassName3}`);
    if (canvasElement) {
      canvasElement.id = 'contact';
    }
  };

  const { progress } = useProgress();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setLoadingComplete(true);
    }
  }, [progress]);

  return (
      <>
        <div className='content-wrapper'>
          <div className="pages-container">

            <div className="mobile-bg">
            </div>

            <div className='homePage active' id='welcome'>
              <Navbar />
              <Canvas
                    className={canvasClassName}
                    camera={{ position: [2, 0, 2.8], fov: 40 }}
                    gl={{ antialias: true }}
                    onCreated={({ gl }) => {
                      assignIdToCanvas();
                    }}
                  >
                  <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1}
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[-5, -5, -5]} 
                                      intensity={0.5} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[0, 0, -5]} 
                                      intensity={2} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[5, 0, 0]} 
                                      intensity={1} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                  <hemisphereLight intensity={0.15} groundColor='black' />
                  <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                  />
                  <Suspense fallback={null}>
                    <HomeModel position={positionHomeModel} rotation={rotationHomeModel}/>
                  </Suspense>
                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    minDistance={1.5}
                    maxDistance={6}
                  />
              </Canvas>
              <div className={`loading ${loadingComplete ? 'gone' : ''}`}>
                <div className="loading-container">
                  <p>Loading {Math.floor(progress)}%</p>
                  <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aboutMePage" id='aboutme'>
                  <div className="mobile-scroller"></div>
                  <div className="mobile-scroller2"></div>
                  <About />
                  <Canvas
                      className={canvasClassName2}
                      camera={{ position: [1, 3.7, 5.5], fov: 50 }}
                      gl={{ antialias: true, shadowMap: { enabled: true } }}
                      onCreated={({ gl }) => {
                        assignIdToCanvas2();
                      }}
                    >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1}
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[-5, -5, -5]} 
                                      intensity={0.5} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[0, 0, -5]} 
                                      intensity={1} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <directionalLight position={[5, 0, 0]} 
                                      intensity={1} 
                                      castShadow 
                                      shadow-mapSize={{ width: 1024, height: 1024 }}
                                      shadow-bias={-0.001}/>
                    <Suspense fallback={null}>
                      <Model3 position={positionAboutModel}/>
                    </Suspense>
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      minDistance={1.3}
                      maxDistance={6}
                    />
                </Canvas>
                <div className={`loading ${loadingComplete ? 'gone' : ''}`}>
                  <div className="loading-container">
                    <p>Loading {Math.floor(progress)}%</p>
                    <div className="loading-bar-container">
                      <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="experience" id='experience'>
              <Experience />
            </div>

            <div className="myWorksPage" id='my-works'>
              <Works />
            </div>

            <div className="contactMePage" id='contact-me'>
              <Contact />
              <Canvas
                    className={canvasClassName3}
                    camera={{ position: [0, 0, 1.5], fov: 30 }}
                    gl={{ antialias: true, shadowMap: { enabled: true } }}
                    onCreated={({ gl }) => {
                      assignIdToCanvas3();
                    }}
                  >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1} 
                                    castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                    shadow-bias={-0.001}/>
                  <directionalLight position={[-5, -5, -5]} intensity={0.5} 
                                    castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                    shadow-bias={-0.001}/>
                  <directionalLight position={[0, 0, -5]} intensity={0.5} 
                                    castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                    shadow-bias={-0.001}/>
                  <directionalLight position={[5, 0, 0]} intensity={0.5} 
                                    castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                    shadow-bias={-0.001}/>
                  <Suspense fallback={null}>
                    <Model4 position={positionContactModel}/>
                  </Suspense>
                  <CustomOrbitControls />
              </Canvas>
            </div>

            <div className="copyright">
              <p>ⓒ 2024 by JFAD</p>
            </div>

          </div>
        </div>
      </>
  )
}

export default App
