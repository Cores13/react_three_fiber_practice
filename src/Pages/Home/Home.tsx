import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
// import { Canvas } from "react-three-fiber";
import { AnimatedComp } from "../../Components/AnimatedComp/AnimatedComp";
import { Plane } from "../../Components/Plane/Plane";
import { OrbitControls, softShadows } from "@react-three/drei";

softShadows();

export const Home = () => {
  return (
    <>
      <Canvas shadows linear camera={{ position: [-4, 3, 10], fov: 60 }}>
        <OrbitControls />
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, 0, -2]} intensity={0.5} />
        <pointLight position={[10, 5, 2]} intensity={0.5} />
        <directionalLight
          castShadow
          intensity={0.3}
          position={[0, 8, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <AnimatedComp position={[-3, 2, -5]} args={[1, 2, 3]} />
        <AnimatedComp position={[2, 2.2, 4]} args={[1, 3, 2]} />
        <AnimatedComp position={[0, 2, 0]} args={[3, 2, 1]} />
        <group>
          <Plane />
        </group>

        {/* <OrbitControls /> */}
      </Canvas>
    </>
  );
};
