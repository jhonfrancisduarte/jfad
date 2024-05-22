import React, { Suspense, useState, useRef } from 'react';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import '../public/css/about.css';


const Ball = () => {
    const props1 = 'images/reactjs.png';
    const props2 = 'images/css.png';
    const props3 = 'images/threejs.svg';
    const props4 = 'images/git.png';
    const props5 = 'images/html.png';
    const props6 = 'images/blenderlogo.png';
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
    const [isAnimating, setIsAnimating] = useState(true);
    const meshRefs = useRef([]);
  
    useFrame(({ clock }) => {
      if (isAnimating) {
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
      }
    });
  
    const handleMouseEnter = () => setIsAnimating(false);
    const handleMouseLeave = () => setIsAnimating(true);
  
    return (
      <div className="skill-balls">
          <div className="skill-ball" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} enablePan={false} />
                    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                        <ambientLight intensity={0.25} />
                        <directionalLight position={[0, 0, 0.05]} />
                        {positions.map((pos, index) => (
                            <mesh key={index} ref={el => (meshRefs.current[index] = el)}
                            castShadow receiveShadow scale={0.5} position={pos}>
                                <icosahedronGeometry args={[1, 5]} />
                                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} />
                                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decals[index]} depthTest={true}/>
                            </mesh>
                        ))}
                    </Float>
                  </Suspense>
                <Preload all />
              </Canvas>
          </div>
      </div>
    );
};
  

export default Ball;