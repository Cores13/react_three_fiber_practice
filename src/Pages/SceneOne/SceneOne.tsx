import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Reflector,
  Text,
  useTexture,
  // useGLTF
} from "@react-three/drei";
import Overlay from "./Overlay";
import "./SceneOne.css";

// function Carla(props: any) {
//   const { scene } = useGLTF("/carla-draco.glb");
//   return <primitive object={scene} {...props} />;
// }

function VideoText({ clicked, ...props }: any) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/concert.mp4",
      crossOrigin: "Anonymous",
      loop: true,
    })
  );
  useEffect(() => void (clicked && video.play()), [video, clicked]);
  return (
    <Text
      className='tectWithVideo'
      //   font='Roboto Slab'
      fontSize={1.7}
      letterSpacing={-0.09}
      {...props}>
      Vox Magna
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach='map'
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <ambientLight intensity={0.5} />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      resolution={512}
      args={[10, 10]}
      mirror={0.4}
      mixBlur={8}
      mixStrength={1}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[400, 100]}>
      {(Material, props) => (
        <Material
          color='#a0a0a0'
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          scale={[1, 1, 1]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Intro({ start, set }: any) {
  const [vec] = useState(() => new THREE.Vector3());
  useEffect(() => {
    setTimeout(() => set(true), 500);
  }, [set]);
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
}

export default function SceneOne({
  ready,
  setReady,
  clicked,
  setClicked,
}: any) {
  // const [clicked, setClicked] = useState(false);
  // const [ready, setReady] = useState(false);
  const store = { clicked, setClicked, ready, setReady };
  return (
    <>
      <Canvas
        className='scene'
        mode='concurrent'
        linear
        gl={{ alpha: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 3, 100], fov: 15 }}>
        <color attach='background' args={["black"]} />
        <fog attach='fog' args={["black", 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <Carla
              rotation={[0, Math.PI - 0.4, 0]}
              position={[-1.2, 0, 0.6]}
              scale={[0.26, 0.26, 0.26]}
            /> */}
            <VideoText {...store} position={[0, 1.3, -1]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.6} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>
      </Canvas>
      {/* <Overlay {...store} /> */}
    </>
  );
}
