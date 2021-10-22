import React, { useRef, useState } from "react";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshWobbleMaterial, useTexture } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

const AnimatedWobbleMaterial = a(MeshWobbleMaterial);

export const AnimatedComp = ({ position, args }: any) => {
  const mesh: any = useRef();

  // const texture = useLoader(TextureLoader, "./rust.jpg");
  const texture = useTexture(
    "https://i.pinimg.com/originals/86/e7/b6/86e7b6469a6c2d8f46923a1e6e97b5f2.jpg"
  );

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  const [expand, setExpand] = useState(false);

  const props: any = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}>
      {/* <MeshWobbleMaterial
        alphaToCoverage
        isMeshStandardMaterial
        speed={0.7}
        factor={0.1}
        skinning
        // map={texture}
        color='grey'
        attach='material'
      /> */}
      <boxBufferGeometry attach='geometry' args={args} />

      <meshLambertMaterial attach='material' color='crimson' />
    </a.mesh>
  );
};
