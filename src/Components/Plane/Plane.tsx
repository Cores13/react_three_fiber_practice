import React from "react";

interface Props {}

export const Plane = (props: Props) => {
  return (
    <mesh receiveShadow position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <shadowMaterial attach='material' color='white' opacity={0.8} />
    </mesh>
  );
};
